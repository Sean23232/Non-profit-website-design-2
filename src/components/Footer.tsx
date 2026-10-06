import { useState, type FormEvent } from "react";
import { footerMission, org } from "../data/cms";
import { Icon, type IconName } from "./Icons";
import { Button, Container } from "./ui";

const programLinks = [
  { label: "Enrichment & Travel Academy", href: "#enrichment" },
  { label: "Leadership Development", href: "#leadership" },
  { label: "Upcoming Sessions", href: "#sessions" },
  { label: "Scholarships & Aid", href: "#scholarships" },
];

const orgLinks = [
  { label: "About Us", href: "#about" },
  { label: "Why Families Choose Us", href: "#why" },
  { label: "Family Stories", href: "#stories" },
  { label: "Support Our Mission", href: "#support" },
  { label: "FAQ", href: "#faq" },
];

const socials: { name: IconName; label: string; href: string }[] = [
  { name: "facebook", label: "Facebook", href: "#" },
  { name: "instagram", label: "Instagram", href: "#" },
  { name: "youtube", label: "YouTube", href: "#" },
  { name: "twitter", label: "Twitter / X", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-navy-950 text-sky-200">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400 text-navy-950">
                <Icon name="compass" className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[15px] font-extrabold tracking-tight text-white">
                  LEISURE DELITE
                </span>
                <span className="mt-1 block text-[9.5px] font-bold uppercase tracking-[0.32em] text-gold-300">
                  Travel Academy
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-sky-200/85">
              {footerMission}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sky-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon name={social.name} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.16em] text-white">
              Programs
            </h3>
            <ul className="mt-5 space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-sky-200/85 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.16em] text-white">
              Organization
            </h3>
            <ul className="mt-5 space-y-3">
              {orgLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-sky-200/85 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#register"
                  className="text-[14px] font-semibold text-gold-300 transition-colors hover:text-gold-200"
                >
                  Register Now →
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter + contact */}
          <div>
            <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.16em] text-white">
              Stay Updated
            </h3>
            <p className="mt-5 text-[14px] leading-relaxed text-sky-200/85">
              Get updates about upcoming programs and opportunities.
            </p>
            {subscribed ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gold-400/40 bg-gold-400/10 px-4 py-3 text-[13.5px] font-semibold text-gold-300">
                <Icon name="check" className="h-4 w-4" />
                You're subscribed. Welcome aboard!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="field field-dark"
                />
                <Button type="submit" variant="gold" className="px-4 py-3" ariaLabel="Subscribe">
                  <Icon name="send" className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            )}
            <div className="mt-8 space-y-2.5 text-[13.5px] text-sky-200/85">
              <p className="flex items-center gap-2.5">
                <Icon name="mail" className="h-4 w-4 text-gold-400" />
                {org.email}
              </p>
              <p className="flex items-center gap-2.5">
                <Icon name="phone" className="h-4 w-4 text-gold-400" />
                {org.phone}
              </p>
              <p className="flex items-center gap-2.5">
                <Icon name="map-pin" className="h-4 w-4 text-gold-400" />
                {org.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[13px] text-sky-200/70 sm:flex-row">
          <p>© 2026 Leisure Delite Travel Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#home"
              className="transition-colors hover:text-white"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              className="transition-colors hover:text-white"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
