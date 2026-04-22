const HOMEPAGE_TRANSFORMATIONS = [
  {
    setName: "Full Exterior Restoration",
    before: [],
    after: [
      "/ywp-album/videos/IMG_9338.MOV",
      "/ywp-album/videos/IMG_9339.MOV",
      "/ywp-album/videos/IMG_9340.MOV",
      "/ywp-album/images/IMG_9341.HEIC.png",
    ],
  },
  {
    setName: "Exterior Door Repaint",
    before: ["/ywp-album/images/IMG_3603.HEIC.png"],
    after: ["/ywp-album/images/IMG_3605.HEIC.png"],
  },
  {
    setName: "Bathroom (full)",
    before: [
      "/ywp-album/images/IMG_3690.HEIC.png",
      "/ywp-album/images/IMG_3691.HEIC.png",
    ],
    after: [
      "/ywp-album/images/IMG_3694.HEIC.png",
      "/ywp-album/images/IMG_3696.HEIC.png",
    ],
  },
] as const;

function MediaFrame({
  src,
  label,
}: {
  src: string;
  label: "BEFORE" | "AFTER";
}) {
  const isVideo = src.endsWith(".MOV");

  return (
    <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white">
      {isVideo ? (
        <video
          controls
          preload="metadata"
          playsInline
          className="h-64 w-full object-cover md:h-72"
        >
          <source src={src} />
        </video>
      ) : (
        <img
          src={src}
          alt={label}
          className="h-64 w-full object-cover md:h-72"
          loading="lazy"
        />
      )}
    </div>
  );
}

function MediaColumn({
  items,
  label,
}: {
  items: readonly string[];
  label: "BEFORE" | "AFTER";
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`grid gap-3 ${items.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {items.map((src) => (
          <MediaFrame key={src} src={src} label={label} />
        ))}
      </div>
      <div className="text-sm font-bold tracking-[0.2em] text-[#111827]">{label}</div>
    </div>
  );
}

export function HomepageTransformations() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {HOMEPAGE_TRANSFORMATIONS.map((transformation) => (
            <article
              key={transformation.setName}
              className="rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] p-4 md:p-5"
            >
              {transformation.before.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <MediaColumn items={transformation.before} label="BEFORE" />
                  <MediaColumn items={transformation.after} label="AFTER" />
                </div>
              ) : (
                <MediaColumn items={transformation.after} label="AFTER" />
              )}
              <div className="pt-4 text-base font-semibold text-[#111827]">
                {transformation.setName}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
