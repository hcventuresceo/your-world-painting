import { useState } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { galleryProjects, resolveAssets } from "@/data/galleryProjects";

interface FeaturedProjectsStripProps {
  onEstimateClick: (hookText?: string) => void;
  onNavigate?: (page: string) => void;
}

const FEATURED_JOB_IDS = ["job-1", "job-10", "job-13", "job-2", "job-3"] as const;

const FEATURED_PROJECTS = FEATURED_JOB_IDS.map((jobId) => {
  const project = galleryProjects.find((entry) => entry.id === jobId);
  if (!project) return null;

  const displayAssets = resolveAssets(project.displayAssets);
  const hero = displayAssets[0];
  const supporting = displayAssets.slice(1);

  if (!hero) return null;

  return {
    id: project.id,
    title: project.title,
    summary: project.subtitle,
    services: project.services,
    hero,
    supporting,
    ctaHook: `I want results like your ${project.title} project`,
  };
}).filter((project) => project !== null);

export function FeaturedProjectsStrip({
  onEstimateClick,
  onNavigate,
}: FeaturedProjectsStripProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const prev = () =>
    setActive((i) => (i - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  const next = () =>
    setActive((i) => (i + 1) % FEATURED_PROJECTS.length);

  const project = FEATURED_PROJECTS[active];
  const supportingCols =
    project.supporting.length === 1
      ? "grid-cols-1"
      : project.supporting.length === 2
      ? "grid-cols-2"
      : "grid-cols-2 md:grid-cols-3";

  return (
    <>
      <section className="bg-[#111827] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#dc2626] text-sm font-bold uppercase tracking-widest mb-3">
              Real Jobs. Real Transformations.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See the Work. Then Decide.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A few of the strongest exterior and interior transformations from
              recent projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#1a2332] border-b border-[#2d3748] px-6 py-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs font-bold uppercase tracking-wide text-[#dc2626] border border-[#dc2626]/40 bg-[#dc2626]/10 px-2 py-0.5 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.summary}</p>
              </div>

              <div className="p-3 md:p-4 bg-[#f0f0f0]">
                <button
                  onClick={() => setLightbox(project.hero.src)}
                  className="relative block w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-lg group focus:outline-none mb-2"
                >
                  <img
                    src={project.hero.src}
                    alt={project.hero.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </button>

                {project.supporting.length > 0 && (
                  <div className={`grid ${supportingCols} gap-2`}>
                    {project.supporting.map((item, i) => (
                      <button
                        key={`${project.id}-${i}`}
                        onClick={() => setLightbox(item.src)}
                        className="relative aspect-square overflow-hidden rounded-lg group focus:outline-none"
                      >
                        <img
                          src={item.src}
                          alt={item.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-6 py-4 border-t border-[#e5e7eb] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {onNavigate ? (
                  <button
                    onClick={() => onNavigate("gallery")}
                    className="text-sm font-semibold text-[#5a5a5a] hover:text-[#111827] underline underline-offset-2 transition-colors"
                  >
                    View full gallery →
                  </button>
                ) : (
                  <span />
                )}
                <button
                  onClick={() => onEstimateClick(project.ctaHook)}
                  className="whitespace-nowrap bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-colors"
                >
                  Get Estimate Like This →
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="size-5" />
              </button>

              <div className="flex gap-2">
                {FEATURED_PROJECTS.map((featuredProject, i) => (
                  <button
                    key={featuredProject.id}
                    onClick={() => setActive(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-[#dc2626]"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next project"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <p className="text-center text-gray-500 text-xs mt-3">
              {active + 1} of {FEATURED_PROJECTS.length} featured projects
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-base mb-6">
              Free estimates on all jobs. Interior, exterior, decks, repairs
              across Rochester and Western New York.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() =>
                  onEstimateClick("I saw your featured projects and want a free estimate")
                }
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] transition-colors"
              >
                Get a Free Estimate
              </button>
              <a
                href="tel:7168150333"
                className="flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3 rounded-md text-base min-h-[48px] hover:bg-white/10 transition-colors"
              >
                <Phone className="size-4" />
                716-815-0333
              </a>
            </div>
          </div>
        </div>
      </section>

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
