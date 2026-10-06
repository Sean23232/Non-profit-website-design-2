import { affordabilityBlocks } from "../data/cms";
import { Icon } from "./Icons";
import { Button, Container, IconTile, Reveal, SectionHeading } from "./ui";

export default function Scholarships() {
  return (
    <section id="scholarships" className="section bg-cream">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Scholarships & Affordability"
            title="Every Student Deserves the Opportunity to Experience More."
            lede="We believe financial circumstances should not prevent students from accessing meaningful educational experiences."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {affordabilityBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 110}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <IconTile name={block.icon} tone={block.tone} />
                <h3 className="mt-5 font-display text-xl font-extrabold text-navy-900">
                  {block.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {block.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Button href="#support" variant="navy" className="group">
              Learn About Support
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
