import { useEffect, useState } from "react";
import { galleryItems } from "../data/cms";
import { cn } from "../utils/cn";
import { Icon } from "./Icons";
import { Container, Reveal, SectionHeading } from "./ui";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight")
        setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
      if (event.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Experience Gallery"
            title="Where Learning Becomes a Memory."
            lede="Moments from sessions, trips, and programs — real students, real places, real discovery."
          />
        </Reveal>

        {/* Masonry grid */}
        <div className="mt-16 columns-2 gap-4 lg:columns-3 xl:columns-4">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={(index % 4) * 70} className="mb-4 break-inside-avoid">
              <figure
                className="group relative cursor-zoom-in overflow-hidden rounded-2xl"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption
                  className={cn(
                    "absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-xl bg-navy-950/70 px-3.5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300",
                    "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <Icon name="map-pin" className="h-3.5 w-3.5 text-gold-300" />
                    {item.caption}
                  </span>
                  <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-gold-300" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            onClick={() => setLightboxIndex(null)}
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
              );
            }}
          >
            <Icon name="arrow-right" className="h-5 w-5 rotate-180" />
          </button>
          <figure
            className="flex max-h-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              {galleryItems[lightboxIndex].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
            }}
          >
            <Icon name="arrow-right" className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
