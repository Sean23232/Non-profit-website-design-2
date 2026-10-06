import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { navLinks, org } from "../data/cms";
import { Icon } from "./Icons";
import { Button, Container } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              scrolled ? "bg-navy-900 text-gold-400" : "bg-gold-400 text-navy-950"
            )}
          >
            <Icon name="compass" className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span
              className={cn(
                "block font-display text-[15px] font-extrabold tracking-tight transition-colors",
                scrolled ? "text-navy-900" : "text-white"
              )}
            >
              LEISURE DELITE
            </span>
            <span
              className={cn(
                "mt-1 block text-[9.5px] font-bold uppercase tracking-[0.32em] transition-colors",
                scrolled ? "text-gold-600" : "text-gold-300"
              )}
            >
              Travel Academy
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-semibold uppercase tracking-[0.05em] transition-colors",
                scrolled
                  ? "text-navy-800 hover:text-gold-600"
                  : "text-white/85 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#register" variant="gold" className="px-5 py-2.5 text-[12px]">
            Register Now
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-lg border transition-colors lg:hidden",
            scrolled
              ? "border-line text-navy-900"
              : "border-white/30 text-white"
          )}
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>
      </Container>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-navy-950 lg:hidden">
          <div className="wrap flex h-20 items-center justify-between">
            <span className="flex items-center gap-3">
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
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 text-white"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>
          <nav className="wrap flex flex-1 flex-col justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-extrabold text-white transition-colors hover:text-gold-300"
              >
                {link.label}
                <Icon name="arrow-right" className="h-5 w-5 text-gold-400" />
              </a>
            ))}
          </nav>
          <div className="wrap space-y-4 pb-10">
            <Button href="#register" variant="gold" className="w-full">
              Register Now
            </Button>
            <p className="text-center text-sm text-sky-300">
              {org.email} • {org.phone}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
