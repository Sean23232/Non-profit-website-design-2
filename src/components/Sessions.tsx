import { useMemo, useState } from "react";
import {
  availabilityCopy,
  sessions,
  type Availability,
  type ProgramId,
  type Session,
} from "../data/cms";
import { emitRegisterIntent } from "../utils/events";
import { cn } from "../utils/cn";
import { Icon } from "./Icons";
import { Button, Container, Pill, Reveal, SectionHeading } from "./ui";

type Filter = "all" | ProgramId;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Sessions" },
  { id: "enrichment", label: "Enrichment" },
  { id: "leadership", label: "Leadership" },
];

const availabilityTone: Record<Availability, "open" | "limited" | "waitlist"> = {
  open: "open",
  limited: "limited",
  waitlist: "waitlist",
};

export default function Sessions() {
  const [filter, setFilter] = useState<Filter>("all");
  const [showAllDates, setShowAllDates] = useState(false);

  const visible = useMemo(
    () => (filter === "all" ? sessions : sessions.filter((s) => s.program === filter)),
    [filter]
  );

  const handleViewSession = (session: Session) => {
    emitRegisterIntent({ program: session.program, sessionId: session.id });
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sessions" className="section bg-white">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="lg:max-w-2xl">
            <SectionHeading
              eyebrow="Upcoming Experiences"
              title="Find Your Next Learning Adventure."
              lede="Browse upcoming sessions, themes, and dates. Availability updates as enrollment fills — register early to secure a spot."
            />
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.07em] transition-all",
                  filter === f.id
                    ? "border-navy-900 bg-navy-900 text-white shadow-sm"
                    : "border-line bg-white text-navy-700 hover:border-navy-900/40 hover:text-navy-900"
                )}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        </div>

        {/* Session cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((session, index) => (
            <Reveal key={session.id} delay={(index % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={session.image}
                    alt={session.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4">
                    <Pill tone={availabilityTone[session.availability]}>
                      {session.seatsNote}
                    </Pill>
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-navy-800 backdrop-blur-sm">
                    {session.program === "enrichment" ? "Enrichment" : "Leadership"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex gap-4">
                    <div className="flex h-16 w-14 flex-none flex-col items-center justify-center rounded-xl bg-navy-900 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold-300">
                        {session.monthLabel}
                      </span>
                      <span className="font-display text-xl font-extrabold leading-none">
                        {session.dayLabel}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-extrabold leading-snug text-navy-900">
                        {session.name}
                      </h3>
                      <p className="mt-1 text-[13px] font-semibold text-gold-600">
                        {session.theme}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                    {session.description}
                  </p>
                  <div className="mt-5 space-y-2 border-t border-line pt-4 text-[13.5px] font-medium text-navy-800">
                    <div className="flex items-center gap-2.5">
                      <Icon name="users" className="h-4 w-4 flex-none text-sky-400" />
                      {session.grades}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Icon name="calendar" className="h-4 w-4 flex-none text-sky-400" />
                      {session.dates} • {session.time}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Icon name="map-pin" className="h-4 w-4 flex-none text-sky-400" />
                      {session.location}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="navy"
                      className="group/btn w-full"
                      onClick={() => handleViewSession(session)}
                    >
                      View Session
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

        {/* View all dates (expandable full calendar list) */}
        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <Button
              variant="outline-dark"
              onClick={() => setShowAllDates((v) => !v)}
              className="group/btn"
              ariaLabel="Toggle full dates list"
            >
              {showAllDates ? "Hide Full Calendar" : "View All Dates"}
              <Icon
                name="calendar"
                className={cn(
                  "h-4 w-4 transition-transform duration-300",
                  showAllDates && "rotate-90"
                )}
              />
            </Button>
          </div>
        </Reveal>

        <div
          className={cn(
            "grid transition-all duration-500 ease-in-out",
            showAllDates
              ? "mt-8 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl border border-line bg-cream p-4 sm:p-6">
              <div className="hidden grid-cols-[1.4fr_1fr_1fr_0.8fr] gap-4 px-4 pb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-muted sm:grid">
                <span>Session</span>
                <span>Dates</span>
                <span>Grades</span>
                <span>Availability</span>
              </div>
              <ul className="divide-y divide-line">
                {sessions.map((session) => (
                  <li
                    key={session.id}
                    className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-[1.4fr_1fr_1fr_0.8fr] sm:items-center sm:gap-4"
                  >
                    <span className="font-display text-[15px] font-extrabold text-navy-900">
                      {session.name}
                      <span className="mt-0.5 block text-[12.5px] font-medium text-muted sm:hidden">
                        {session.theme}
                      </span>
                    </span>
                    <span className="text-[14px] font-medium text-navy-800">
                      {session.dates}
                    </span>
                    <span className="text-[14px] font-medium text-navy-800">
                      {session.grades}
                    </span>
                    <span>
                      <Pill tone={availabilityTone[session.availability]}>
                        {availabilityCopy[session.availability]}
                      </Pill>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 px-4 text-[12.5px] text-muted">
                Dates, themes, and availability are updated seasonally. Contact us for the
                most current information.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
