import { org } from "../data/cms";
import { Icon } from "./Icons";
import { Button, Container, Reveal, SectionHeading } from "./ui";

const missionImage = {
  src: "https://images.pexels.com/photos/33873464/pexels-photo-33873464.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1150",
  alt: "An educator guiding a group of children through a historical building",
};

export default function Mission() {
  return (
    <section id="about" className="section bg-white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Our Mission"
                title="Education Should Be an Experience."
                lede="Leisure Delite Travel Academy creates opportunities for young people to learn through experiences that extend beyond the traditional classroom. Through hands-on activities, educational travel, social studies enrichment, and leadership development, students are encouraged to explore, discover, and grow."
              />
            </Reveal>
            <Reveal delay={120}>
              <blockquote className="mt-9 border-l-4 border-gold-400 bg-cream px-6 py-5 font-display text-xl font-extrabold tracking-tight text-navy-900 sm:text-2xl">
                Explore. Experience. Learn. Lead.
              </blockquote>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="#programs" variant="navy" className="group">
                  Explore Our Programs
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button href="#support" variant="outline-dark">
                  Support Our Mission
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Image composition */}
          <Reveal delay={150} className="lg:justify-self-end">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <span
                aria-hidden="true"
                className="absolute -right-5 -top-5 h-full w-full rounded-2xl border-2 border-gold-400/60"
              />
              <img
                src={missionImage.src}
                alt={missionImage.alt}
                className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl border border-line bg-white p-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <Icon name="graduation" className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block font-display text-sm font-extrabold text-navy-900">
                      {org.tagline}
                    </span>
                    <span className="block text-[12.5px] text-muted">
                      Enrichment • Travel • Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
