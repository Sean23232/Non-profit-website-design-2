import { whyUs } from "../data/cms";
import { Container, IconTile, Reveal, SectionHeading } from "./ui";

const tones = ["gold", "sky", "coral", "navy", "gold", "sky"] as const;

export default function WhyUs() {
  return (
    <section id="why" className="section bg-cream">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Families Choose Us"
            title="More Than a Camp. An Experience."
            lede="Every detail of Leisure Delite is designed around one goal — helping students learn, grow, and remember."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100}>
              <div className="h-full">
                <IconTile name={item.icon} tone={tones[index % tones.length]} />
                <h3 className="mt-5 font-display text-[15px] font-extrabold uppercase tracking-[0.06em] text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
