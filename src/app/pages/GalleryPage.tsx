import { useState } from "react";
import { Phone } from "lucide-react";
import {
  galleryProjects,
  ALL_SERVICE_FILTERS,
  resolveAssets,
  type GalleryProject,
  type MediaItem,
} from "@/data/galleryProjects";

// ─── Project Card ─────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: GalleryProject;
  onEstimateClick: (hookText?: string) => void;
}

function ProjectCard({ project, onEstimateClick }: ProjectCardProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const displayAssets = resolveAssets(project.displayAssets);
  const hero = displayAssets[0];
  const supportingAssets = displayAssets.slice(1);
  const cols =
    supportingAssets.length === 1
      ? "grid-cols-1"
      : supportingAssets.length === 2
      ? "grid-cols-2"
      : "grid-cols-2 md:grid-cols-3";

  return (
    <>
      <article
        className={`border rounded-2xl overflow-hidden shadow-sm ${
          project.featured
            ? "border-[#111827] shadow-md"
            : "border-[#e5e7eb]"
        }`}
      >
        {/* ── Card header ── */}
        <div
          className={`border-b px-6 py-5 ${
            project.featured
              ? "bg-[#111827] border-[#2d3748]"
              : "bg-[#f8f8f8] border-[#e5e7eb]"
          }`}
        >
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {project.featured && (
              <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b] border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-2 py-0.5 rounded">
                Featured Project
              </span>
            )}
            {project.services.map((s) => (
              <span
                key={s}
                className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded ${
                  project.featured
                    ? "text-[#dc2626] border border-[#dc2626]/40 bg-[#dc2626]/10"
                    : "text-[#dc2626] border border-[#dc2626]/30 bg-[#dc2626]/5"
                }`}
              >
                {s}
              </span>
            ))}
          </div>

          <h2
            className={`text-xl font-bold mb-1 ${
              project.featured ? "text-white" : "text-[#111827]"
            }`}
          >
            {project.title}
          </h2>
          <p
            className={`text-sm ${
              project.featured ? "text-gray-300" : "text-[#5a5a5a]"
            }`}
          >
            {project.subtitle}
          </p>
        </div>

        {/* ── Hero image — displayAssets[0], full width ── */}
        {hero && (
          <div className="relative">
            <button
              onClick={() => setLightbox(hero.src)}
              className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] group"
            >
              <img
                src={hero.src}
                alt={hero.caption}
                className="w-full aspect-video object-cover group-hover:brightness-95 transition-[filter] duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-white text-sm font-medium leading-snug">
                    {hero.caption}
                  </p>
                </div>
              </div>
            </button>
          </div>
        )}

        {supportingAssets.length > 0 && (
          <div className="border-t border-[#e5e7eb] px-4 md:px-6 py-5">
            <div className={`grid ${cols} gap-1.5`}>
              {supportingAssets.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(item.src)}
                  className="relative overflow-hidden rounded-lg bg-black group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626]"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-2.5 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs leading-snug">{item.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Card footer ── */}
        <div className="bg-[#f8f8f8] border-t border-[#e5e7eb] px-6 py-4 flex justify-end">
          <button
            onClick={() =>
              onEstimateClick(
                `I want results like your ${project.title} project`
              )
            }
            className="whitespace-nowrap bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-colors"
          >
            Request Similar Estimate →
          </button>
        </div>
      </article>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold leading-none hover:text-gray-300 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={lightbox}
            alt="Full view"
            className="max-w-full max-h-[92vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface GalleryPageProps {
  onEstimateClick: (hookText?: string) => void;
}

export function GalleryPage({ onEstimateClick }: GalleryPageProps) {
  const [activeService, setActiveService] = useState("All");

  const filtered =
    activeService === "All"
      ? galleryProjects.filter((p) => p.displayAssets.length > 0)
      : galleryProjects.filter((p) =>
          p.displayAssets.length > 0 && p.services.includes(activeService as never)
        );

  const featured = filtered.filter((p) => p.featured);
  const supporting = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="bg-[#111827] py-14 px-4 text-center">
        <p className="text-[#dc2626] text-sm font-bold uppercase tracking-widest mb-3">
          Real Work. Real Transformations.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Every Job, Start to Finish
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
          Each project below is documented from before through after. Interior,
          exterior, full buildings, detail work — this is how we work across
          Rochester and Western New York.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() =>
              onEstimateClick(
                "I'm looking at your gallery and want an estimate"
              )
            }
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] transition-colors"
          >
            Get a Free Estimate
          </button>
          <a
            href="tel:7168150333"
            className="flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] hover:bg-white/10 transition-colors"
          >
            <Phone className="size-4" />
            716-815-0333
          </a>
        </div>
      </div>

      {/* ── Filter bar ── */}
      <div className="sticky top-[calc(33px+72px)] z-30 bg-white border-b border-[#e5e7eb] shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {ALL_SERVICE_FILTERS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeService === s
                    ? "bg-[#111827] text-white border-[#111827]"
                    : "bg-white text-[#3a3a3a] border-[#e5e7eb] hover:border-[#111827] hover:text-[#111827]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured projects ── */}
      {featured.length > 0 && (
        <div className="container mx-auto px-4 pt-10 pb-6 space-y-10">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEstimateClick={onEstimateClick}
            />
          ))}
        </div>
      )}

      {/* ── Supporting projects ── */}
      {supporting.length > 0 && (
        <div className="container mx-auto px-4 pb-10">
          {featured.length > 0 && (
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-[#e5e7eb]" />
              <span className="text-sm font-bold text-[#5a5a5a] uppercase tracking-wider whitespace-nowrap">
                More Projects
              </span>
              <div className="h-px flex-1 bg-[#e5e7eb]" />
            </div>
          )}
          <div className="space-y-8">
            {supporting.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEstimateClick={onEstimateClick}
              />
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="container mx-auto px-4 py-20 text-center text-[#5a5a5a]">
          No projects match that filter yet.
        </div>
      )}

      {/* ── Bottom CTA ── */}
      <div className="bg-[#111827] py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Want Results Like These?
        </h2>
        <p className="text-gray-300 max-w-md mx-auto mb-6">
          Free estimates on all jobs. Interior, exterior, drywall, staining —
          Malik handles it all across Rochester and Western New York.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() =>
              onEstimateClick("I saw your gallery and I'm interested")
            }
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] transition-colors"
          >
            Get a Free Estimate
          </button>
          <a
            href="tel:7168150333"
            className="flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] hover:bg-white/10 transition-colors"
          >
            <Phone className="size-4" />
            716-815-0333
          </a>
        </div>
      </div>

    </div>
  );
}
