/**
 * HCV Asset Scoring Logic v1
 *
 * Scores individual project assets (photos/videos) for gallery surfacing priority.
 * Built from the curation decisions made during the YWP gallery build.
 *
 * Input:  raw asset metadata (from ASSET_GROUPS.md or equivalent structured data)
 * Output: numeric score (0–100) + tier label (1–5)
 *
 * To reuse for a new client: no changes needed. Feed in the client's asset metadata.
 * To update scoring weights: edit the constants below.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type AssetStage = "Before" | "In-Progress" | "After" | "Unknown";
export type AssetConfidence = "High" | "Medium" | "Low";
export type AssetMediaType = "Image" | "Video";

export interface RawAsset {
  id: string;
  fileName: string;
  mediaType: AssetMediaType;
  sceneType: string;           // "deck", "exterior", "stairwell", "bathroom", etc.
  stage: AssetStage;
  visualDescription: string;   // free-text description of what's visible
  confidence: AssetConfidence;
  propertyGroup: string;
  /** Set to true if this asset's project has both a Before AND After shot */
  projectHasPairedStages?: boolean;
}

export type ScoreTier = 1 | 2 | 3 | 4 | 5;

export interface AssetScore {
  asset: RawAsset;
  total: number;
  tier: ScoreTier;
  breakdown: {
    stageScore: number;
    sceneScore: number;
    qualityScore: number;
    subtotalBeforeMultiplier: number;
    confidenceMultiplier: number;
    bonuses: number;
    penalties: number;
  };
}

// ─── Weights ──────────────────────────────────────────────────────────────────

/**
 * Stage Score (0–30)
 * After = highest. Finished work is the primary conversion driver.
 * Before = second. Transformation context is essential for contrast.
 * In-Progress = moderate. Shows work ethic, but limited standalone value.
 */
const STAGE_SCORES: Record<AssetStage, number> = {
  After:        30,
  Before:       24,
  "In-Progress": 14,
  Unknown:       4,
};

/**
 * Scene Type Score (0–25)
 * Full-property and full-room shots score highest.
 * Detail/close-up shots score lowest (useful for expansion, not for featured).
 */
const SCENE_SCORES: Record<string, number> = {
  exterior:    25,
  siding:      22,
  deck:        22,
  porch:       20,
  stairwell:   18,
  bathroom:    18,
  interior:    16,
  ceiling:     16,
  hallway:     15,
  door:        14,
  detail:       7,
  "close-up":   7,
};
const DEFAULT_SCENE_SCORE = 8;

/**
 * Confidence Multiplier
 * Applied to the (stageScore + sceneScore + rawQualityScore) subtotal.
 * Low-confidence assets are penalized before bonuses are added.
 */
const CONFIDENCE_MULTIPLIER: Record<AssetConfidence, number> = {
  High:   1.00,
  Medium: 0.78,
  Low:    0.50,
};

/**
 * Quality keyword boosts — scanned against visualDescription (case-insensitive)
 * Max additive contribution: ~20 points
 */
const QUALITY_BOOSTS: { pattern: RegExp; points: number; label: string }[] = [
  { pattern: /\b(wide|full[-\s]?view|full[-\s]?property|full[-\s]?exterior)\b/i, points: 6, label: "wide/full angle" },
  { pattern: /\b(complete|crisp|sharp|clean)\b/i,                                 points: 5, label: "clean finish" },
  { pattern: /\b(blue sky|summer|fall|foliage)\b/i,                               points: 3, label: "natural light" },
  { pattern: /\b(before|after|transformation|contrast)\b/i,                        points: 2, label: "transformation context" },
  { pattern: /\b(painter|crew|malik|posing)\b/i,                                  points: 4, label: "crew/social proof in frame" },
];

/**
 * Quality keyword penalties — scanned against visualDescription (case-insensitive)
 */
const QUALITY_PENALTIES: { pattern: RegExp; points: number; label: string }[] = [
  { pattern: /\bclose[-\s]?up\b/i,                                               points: -4, label: "close-up as primary subject" },
  { pattern: /\b(cluttered|confusing|dark|weak|poor)\b/i,                        points: -8, label: "weak visual quality" },
  { pattern: /\b(partially|half|incomplete)\b/i,                                  points: -3, label: "incomplete coverage" },
];

/**
 * Drop-cloth penalty applied only when Stage is After
 * (drop cloths in finished shots signal the job isn't done)
 */
const DROP_CLOTH_AFTER_PENALTY = -8;

/**
 * Flat bonuses applied after the confidence multiplier
 */
const BONUSES = {
  video:             10,  // dynamic proof, rare, differentiating
  pairedStages:       8,  // project has both Before AND After = full transformation story
  crewInFrame:        5,  // person visible = social proof (handled above in boosts too, this is additive)
};

// ─── Scoring function ─────────────────────────────────────────────────────────

export function scoreAsset(asset: RawAsset): AssetScore {
  // 1. Stage score
  const stageScore = STAGE_SCORES[asset.stage] ?? STAGE_SCORES.Unknown;

  // 2. Scene type score (normalize to lowercase)
  const normalizedScene = asset.sceneType.toLowerCase().trim();
  const sceneScore = SCENE_SCORES[normalizedScene] ?? DEFAULT_SCENE_SCORE;

  // 3. Quality score from description keywords
  const desc = asset.visualDescription;
  let qualityScore = 0;
  const matchedBoosts: string[] = [];
  const matchedPenalties: string[] = [];

  for (const boost of QUALITY_BOOSTS) {
    if (boost.pattern.test(desc)) {
      qualityScore += boost.points;
      matchedBoosts.push(boost.label);
    }
  }
  for (const penalty of QUALITY_PENALTIES) {
    if (penalty.pattern.test(desc)) {
      qualityScore += penalty.points; // already negative
      matchedPenalties.push(penalty.label);
    }
  }
  // Drop cloth in After shot
  if (asset.stage === "After" && /drop\s*cloth/i.test(desc)) {
    qualityScore += DROP_CLOTH_AFTER_PENALTY;
    matchedPenalties.push("drop cloth visible in After shot");
  }

  // 4. Apply confidence multiplier to subtotal
  const subtotal = stageScore + sceneScore + qualityScore;
  const multiplier = CONFIDENCE_MULTIPLIER[asset.confidence];
  const multipliedScore = subtotal * multiplier;

  // 5. Flat bonuses (applied after multiplier — confidence shouldn't discount these)
  let bonuses = 0;
  if (asset.mediaType === "Video") bonuses += BONUSES.video;
  if (asset.projectHasPairedStages) bonuses += BONUSES.pairedStages;

  // 6. Clamp to 0–100
  const total = Math.min(100, Math.max(0, Math.round(multipliedScore + bonuses)));

  // 7. Tier
  const tier = getTier(total);

  return {
    asset,
    total,
    tier,
    breakdown: {
      stageScore,
      sceneScore,
      qualityScore,
      subtotalBeforeMultiplier: subtotal,
      confidenceMultiplier: multiplier,
      bonuses,
      penalties: matchedPenalties.length,
    },
  };
}

// ─── Tier thresholds ──────────────────────────────────────────────────────────

/**
 * Tier 1 (80–100): Surface first — featured position, initial view
 * Tier 2 (60–79): Surface in initial view — strong supporting asset
 * Tier 3 (40–59): Show in expanded / "Show more" — good but not leading
 * Tier 4 (20–39): Available in full library — low conversion value
 * Tier 5 (0–19):  Consider excluding — weak, mismatch, or duplicate
 */
function getTier(score: number): ScoreTier {
  if (score >= 80) return 1;
  if (score >= 60) return 2;
  if (score >= 40) return 3;
  if (score >= 20) return 4;
  return 5;
}

// ─── Ranking helper ───────────────────────────────────────────────────────────

/**
 * Score and rank a list of assets.
 * Returns them sorted highest → lowest score.
 * Useful for auto-selecting which assets surface in each gallery project.
 */
export function rankAssets(assets: RawAsset[]): AssetScore[] {
  return assets
    .map(scoreAsset)
    .sort((a, b) => b.total - a.total);
}

/**
 * From a ranked list, split into initialDisplay and expanded.
 * initialCount = how many to show before "Show more."
 */
export function splitByDisplayPriority(
  scored: AssetScore[],
  initialCount: number
): { initial: AssetScore[]; expanded: AssetScore[] } {
  return {
    initial: scored.slice(0, initialCount),
    expanded: scored.slice(initialCount),
  };
}
