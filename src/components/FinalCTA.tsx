import { Button, Container, Reveal } from "./ui";

const bgImage =
  "https://images.pexels.com/photos/6147395/pexels-photo-6147395.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2000&h=1100";

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-navy-950 py-24">
      <img
        src={bgImage}
        alt="Happy group of students walking together with books on a city street"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-900/78 to-navy-900/45" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-gold-300">Join Us</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-4 font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
              Give Them More Than a Classroom.
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sky-100 lg:text-xl">
              Give them experiences. Give them opportunities. Give them a chance to
              explore the world and discover what they can become.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#register" variant="gold" className="group px-8 py-4 text-[14px]">
                Register Now
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
              <Button href="#support" variant="ghost-light" className="px-8 py-4 text-[14px]">
                Support Our Mission
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
