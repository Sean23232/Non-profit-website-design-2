import { enrichmentImages, enrichmentJourney } from "../data/cms";
import { Icon } from "./Icons";
import { Button, Container, Reveal, SectionHeading } from "./ui";

export default function Enrichment() {
  return (
    <section id="enrichment" className="section bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Enrichment & Travel Academy"
            title="Learning Comes to Life."
            lede="When school is out, learning doesn't have to stop. Our day camp operates during school breaks, giving students the chance to learn social studies through hands-on activities, cultural experiences, and educational travel."
          />
        </Reveal>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Photo composition */}
          <Reveal>
            <div className="relative pb-14 pr-14">
              <img
                src={enrichmentImages.main.src}
                alt={enrichmentImages.main.alt}
                className="w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
              <img
                src={enrichmentImages.small.src}
                alt={enrichmentImages.small.alt}
                className="absolute -bottom-2 right-0 w-48 rounded-2xl border-6 border-white object-cover shadow-xl sm:w-60"
                loading="lazy"
              />
              <span className="absolute -left-4 top-8 rounded-2xl bg-navy-900 px-4 py-3 text-white shadow-lg">
                <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-gold-300">
                  <Icon name="clock" className="h-4 w-4" />
                  School-break sessions
                </span>
              </span>
            </div>
          </Reveal>

          {/* Experience journey */}
          <div>
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold-600">
                The Experience Journey
              </p>
            </Reveal>
            <ol className="mt-6 space-y-8">
              {enrichmentJourney.map((step, index) => (
                <Reveal key={step.number} delay={index * 90}>
                  <li className="relative pl-16">
                    {index < enrichmentJourney.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[23px] top-12 h-[calc(100%+1rem)] w-0.5 bg-line"
                      />
                    )}
                    <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-extrabold text-gold-400 shadow-md">
                      {step.number}
                    </span>
                    <h3 className="pt-2 font-display text-xl font-extrabold uppercase tracking-wide text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                      {step.copy}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <div className="mt-10">
                <Button href="#sessions" variant="navy" className="group">
                  See Upcoming Sessions
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
