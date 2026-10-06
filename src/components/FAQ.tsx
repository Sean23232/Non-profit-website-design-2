import { useState } from "react";
import { faqs, org } from "../data/cms";
import { cn } from "../utils/cn";
import { Icon } from "./Icons";
import { Button, Container, Reveal, SectionHeading } from "./ui";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-cream">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Frequently Asked Questions"
                title="Questions, Answered."
                lede="Everything parents and partners ask us most. Can't find what you're looking for? Our team is happy to help."
              />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 rounded-2xl border border-line bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-extrabold text-navy-900">
                  Still have questions?
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  Reach out and we'll get back to you as soon as we can.
                </p>
                <div className="mt-5 space-y-2.5 text-[14px] font-medium text-navy-800">
                  <p className="flex items-center gap-2.5">
                    <Icon name="mail" className="h-4 w-4 text-gold-500" />
                    {org.email}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Icon name="phone" className="h-4 w-4 text-gold-500" />
                    {org.phone}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href="#contact" variant="navy" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Accordion */}
          <div>
            <Reveal delay={100}>
              <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-sm">
                {faqs.map((faq, index) => {
                  const open = openIndex === index;
                  return (
                    <div key={faq.question}>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? null : index)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-display text-[15.5px] font-extrabold leading-snug text-navy-900">
                          {faq.question}
                        </span>
                        <span
                          className={cn(
                            "flex h-8 w-8 flex-none items-center justify-center rounded-full border transition-all duration-300",
                            open
                              ? "rotate-45 border-gold-400 bg-gold-400 text-navy-950"
                              : "border-line text-navy-700"
                          )}
                        >
                          <Icon name="plus" className="h-4 w-4" />
                        </span>
                      </button>
                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-in-out",
                          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-muted">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
