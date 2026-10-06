import { useState } from "react";
import {
  donationAmounts,
  donationDefaultImpact,
  donationImpact,
} from "../data/cms";
import { cn } from "../utils/cn";
import { Icon } from "./Icons";
import { Button, Container, Reveal, SectionHeading } from "./ui";

const supportBullets = [
  "Fund scholarships for students who need financial assistance",
  "Provide materials, travel, and hands-on learning experiences",
  "Expand leadership opportunities for high school students",
];

export default function Donate() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number | "other">(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donated, setDonated] = useState(false);

  const effectiveAmount =
    amount === "other" ? Number(customAmount) || 0 : amount;

  const impact =
    amount === "other"
      ? donationDefaultImpact
      : donationImpact[amount] ?? donationDefaultImpact;

  const donateLabel =
    amount === "other"
      ? customAmount
        ? `Donate $${customAmount}${frequency === "monthly" ? " / mo" : ""}`
        : "Donate"
      : `Donate $${amount}${frequency === "monthly" ? " / month" : ""}`;

  return (
    <section id="support" className="section bg-navy-950 bg-dots">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <Reveal>
              <SectionHeading
                theme="dark"
                eyebrow="Support Our Mission"
                title="Help Us Create More Opportunities."
                lede="Your support helps make meaningful educational and leadership experiences possible for more students. Every gift — of any size — helps a young person explore, learn, and grow."
              />
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-8 space-y-4">
                {supportBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[15px] text-sky-100">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-[12.5px] leading-relaxed text-sky-200/75">
                Leisure Delite Travel Academy is a nonprofit organization. Donation
                receipts will be provided for your records. [Tax information placeholder]
              </p>
            </Reveal>
          </div>

          {/* Donation card */}
          <Reveal delay={160}>
            <div className="rounded-2xl border border-white/10 bg-white p-7 shadow-2xl sm:p-9">
              {donated ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-coral-400/15 text-coral-500">
                    <Icon name="heart" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-900">
                    Thank you for supporting our mission.
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                    Your generosity helps students access experiences they otherwise
                    might not have. A receipt will be sent to your email.
                  </p>
                  <p className="mt-4 text-[12px] text-muted">
                    This is a design concept — payment integration is coming soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setDonated(false)}
                    className="mt-8 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-600 hover:text-gold-500"
                  >
                    Make another gift
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl font-extrabold text-navy-900">
                      Make a Gift
                    </h3>
                    <div className="grid grid-cols-2 gap-1 rounded-lg bg-navy-900/6 p-1">
                      <button
                        type="button"
                        onClick={() => setFrequency("once")}
                        className={cn(
                          "rounded-md px-4 py-2 text-[12px] font-bold uppercase tracking-[0.06em] transition-all",
                          frequency === "once"
                            ? "bg-navy-900 text-white shadow-sm"
                            : "text-navy-700 hover:text-navy-900"
                        )}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency("monthly")}
                        className={cn(
                          "rounded-md px-4 py-2 text-[12px] font-bold uppercase tracking-[0.06em] transition-all",
                          frequency === "monthly"
                            ? "bg-navy-900 text-white shadow-sm"
                            : "text-navy-700 hover:text-navy-900"
                        )}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-5 gap-2">
                    {donationAmounts.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmount(value)}
                        className={cn(
                          "rounded-lg border px-2 py-3.5 text-[14px] font-extrabold transition-all",
                          amount === value
                            ? "border-coral-500 bg-coral-400/12 text-coral-600 shadow-sm"
                            : "border-line text-navy-700 hover:border-navy-900/40 hover:text-navy-900"
                        )}
                      >
                        ${value}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAmount("other")}
                      className={cn(
                        "rounded-lg border px-2 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.04em] transition-all",
                        amount === "other"
                          ? "border-coral-500 bg-coral-400/12 text-coral-600 shadow-sm"
                          : "border-line text-navy-700 hover:border-navy-900/40 hover:text-navy-900"
                      )}
                    >
                      Other
                    </button>
                  </div>

                  {amount === "other" && (
                    <div className="mt-4">
                      <label htmlFor="customAmount" className="field-label">
                        Custom Amount (USD)
                      </label>
                      <input
                        id="customAmount"
                        type="number"
                        min={1}
                        className="field"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                      />
                    </div>
                  )}

                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-cream px-4 py-4">
                    <Icon name="sparkles" className="mt-0.5 h-5 w-5 flex-none text-gold-500" />
                    <p className="text-[13.5px] leading-relaxed text-navy-800">
                      {effectiveAmount > 0 && amount !== "other"
                        ? `Your gift of $${effectiveAmount}${frequency === "monthly" ? " / month" : ""} — ${impact}`
                        : impact}
                    </p>
                  </div>

                  <Button
                    variant="coral"
                    className="mt-6 w-full py-4 text-[14px]"
                    onClick={() => setDonated(true)}
                    ariaLabel={donateLabel}
                  >
                    {donateLabel}
                  </Button>

                  <div className="mt-5 flex items-center gap-4">
                    <span className="h-px flex-1 bg-line" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                      or
                    </span>
                    <span className="h-px flex-1 bg-line" />
                  </div>

                  <Button
                    href="#contact"
                    variant="outline-dark"
                    className="mt-5 w-full"
                  >
                    Become a Community Partner
                  </Button>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
