import { leadership } from "../data/cms";
import { emitRegisterIntent } from "../utils/events";
import { Icon } from "./Icons";
import { Button, Container, IconTile, Reveal, SectionHeading } from "./ui";

export default function Leadership() {
  return (
    <section id="leadership" className="section bg-white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Photo composition (reversed order for rhythm) */}
          <Reveal className="lg:order-last lg:justify-self-end">
            <div className="relative mx-auto max-w-md pb-14 pl-14 lg:max-w-none">
              <img
                src={leadership.images.main.src}
                alt={leadership.images.main.alt}
                className="w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
              <img
                src={leadership.images.small.src}
                alt={leadership.images.small.alt}
                className="absolute -bottom-2 left-0 w-48 rounded-2xl border-6 border-white object-cover shadow-xl sm:w-60"
                loading="lazy"
              />
              <span className="absolute -right-4 top-8 rounded-2xl bg-navy-900 px-4 py-3 text-white shadow-lg">
                <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gold-300">
                  <Icon name="award" className="h-4 w-4" />
                  Grades 9 – 12
                </span>
              </span>
            </div>
          </Reveal>

          {/* Text */}
          <div className="lg:order-first">
            <Reveal>
              <SectionHeading
                eyebrow={leadership.eyebrow}
                title={leadership.title}
                lede={leadership.copy}
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {leadership.features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 90}>
                  <div className="h-full rounded-2xl border border-line bg-cream p-5 transition-colors duration-300 hover:border-gold-400/50">
                    <IconTile name={feature.icon} tone="navy" className="h-11 w-11" />
                    <h3 className="mt-4 font-display text-[15px] font-extrabold uppercase tracking-wide text-navy-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                      {feature.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220}>
              <div className="mt-10">
                <Button
                  variant="navy"
                  className="group"
                  onClick={() => {
                    emitRegisterIntent({ program: "leadership" });
                    document
                      .getElementById("register")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Discover the Leadership Program
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
