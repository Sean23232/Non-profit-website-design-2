import { travelGallery, travelStatement } from "../data/cms";
import { Icon } from "./Icons";
import { Container, Reveal, SectionHeading } from "./ui";

export default function Travel() {
  const [featured, ...rest] = travelGallery;

  return (
    <section id="experiences" className="section bg-navy-950">
      <Container>
        <Reveal>
          <SectionHeading
            theme="dark"
            eyebrow="Educational Travel"
            title="See the World. Understand the Story."
            lede="Educational travel turns abstract concepts into real understanding. When students walk through a historic site, explore a museum, or experience a new culture firsthand, social studies becomes a story they are part of."
          />
        </Reveal>

        {/* Asymmetric editorial gallery */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <figure className="group relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:col-span-2 lg:row-span-2 lg:h-auto">
            <img
              src={featured.src}
              alt={featured.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-navy-950/70 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md">
              <Icon name="map-pin" className="h-3.5 w-3.5 text-gold-300" />
              {featured.caption}
            </figcaption>
          </figure>
          {rest.map((item) => (
            <figure
              key={item.src}
              className="group relative h-56 overflow-hidden rounded-2xl lg:h-auto"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-navy-950/70 px-3.5 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                <Icon name="map-pin" className="h-3.5 w-3.5 text-gold-300" />
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <Reveal delay={120}>
          <blockquote className="mt-20 text-center">
            <span className="font-display text-6xl font-extrabold leading-none text-gold-400">
              &ldquo;
            </span>
            <p className="mx-auto mt-2 max-w-3xl font-display text-2xl font-bold leading-snug text-white lg:text-[1.9rem]">
              {travelStatement}
            </p>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
