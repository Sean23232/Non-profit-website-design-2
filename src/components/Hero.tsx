import { hero } from "../data/cms";
import { Icon } from "./Icons";
import { Button, Container, Reveal } from "./ui";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950"
    >
      {/* Background image + sophisticated overlay */}
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/82 to-navy-900/35" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-950/70 to-transparent" />

      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm">
              <Icon name="compass" className="h-3.5 w-3.5" />
              Leisure Delite Travel Academy
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-[2.85rem] font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.7rem]">
              Learning{" "}
              <span className="relative inline-block">
                {hero.highlightedWord}
                <svg
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-gold-400 sm:-bottom-2.5"
                >
                  <path
                    d="M4 10 C 50 3, 150 3, 196 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              the Classroom.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-sky-100 lg:text-xl">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-sky-200/90">
              {hero.supporting}
            </p>
          </Reveal>

          <Reveal delay={330}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#register" variant="gold" className="group px-8 py-4 text-[14px]">
                Register Now
                <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button href="#programs" variant="ghost-light" className="px-8 py-4 text-[14px]">
                Explore Our Programs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-sky-200">
              {hero.trustLine.map((item, i) => (
                <span key={item} className="flex items-center gap-4">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-gold-400" />}
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Floating next-session card (desktop) */}
      <a
        href="#sessions"
        className="group absolute bottom-10 right-8 z-10 hidden w-80 rounded-2xl border border-white/15 bg-navy-900/55 p-5 backdrop-blur-md transition-colors duration-300 hover:border-gold-400/50 hover:bg-navy-900/70 lg:block"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-300">
          Next session
        </span>
        <span className="mt-2 block font-display text-lg font-extrabold leading-snug text-white">
          Summer Discovery Session
        </span>
        <span className="mt-2 flex items-center gap-2 text-sm text-sky-200">
          <Icon name="calendar" className="h-4 w-4 text-gold-300" />
          June 15 – June 26 • Pre-K – 8th Grade
        </span>
        <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-gold-300">
          View dates
          <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </a>
    </section>
  );
}
