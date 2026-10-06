import { impactPlaceholderNote, impactStats, testimonials } from "../data/cms";
import { Container, Reveal, SectionHeading } from "./ui";

export default function Testimonials() {
  return (
    <section id="stories" className="section bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Family Voices"
            title="An Experience Parents Can Feel Good About."
            lede="Hear from the families who have seen their children explore, grow, and come home excited to learn more."
          />
        </Reveal>

        {/* Impact stats — editable placeholders */}
        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-cream px-6 py-8 text-center"
              >
                <span className="block font-display text-4xl font-extrabold tracking-tight text-navy-900">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[12.5px] italic text-muted">
            {impactPlaceholderNote}
          </p>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal key={t.name} delay={index * 110}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="font-display text-5xl font-extrabold leading-none text-gold-400">
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-[15.5px] leading-relaxed text-navy-800">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-extrabold text-gold-300">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold text-navy-900">
                      {t.name}
                    </span>
                    <span className="block text-[12.5px] text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
