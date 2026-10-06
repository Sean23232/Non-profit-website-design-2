import { programs } from "../data/cms";
import { Icon } from "./Icons";
import { Button, Container, Reveal, SectionHeading } from "./ui";

export default function Programs() {
  return (
    <section id="programs" className="section bg-cream">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our Programs"
            title="Two Programs. One Mission."
            lede="Creating meaningful opportunities for students at every stage of their educational journey."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-navy-950/85 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-300 backdrop-blur-sm">
                    {program.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-display text-[1.55rem] font-extrabold leading-snug text-navy-900">
                    {program.name}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-muted">
                    {program.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-[14px] font-medium text-navy-800"
                      >
                        <Icon name="check" className="h-4 w-4 flex-none text-gold-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href={program.href}
                      variant="outline-dark"
                      className="group/btn"
                    >
                      {program.cta}
                      <Icon
                        name="arrow-right"
                        className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                      />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
