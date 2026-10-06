import { useEffect, useMemo, useState, type FormEvent } from "react";
import { sessions, type ProgramId } from "../data/cms";
import { REGISTER_EVENT, type RegisterIntent } from "../utils/events";
import { cn } from "../utils/cn";
import { Icon } from "./Icons";
import { Container, Reveal } from "./ui";

type ProgramChoice = ProgramId | "unsure" | "";

interface FormState {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  grade: string;
  program: ProgramChoice;
  sessionId: string;
  children: string;
  questions: string;
}

const initialForm: FormState = {
  studentName: "",
  parentName: "",
  email: "",
  phone: "",
  grade: "",
  program: "",
  sessionId: "",
  children: "1",
  questions: "",
};

const gradeOptions = [
  "Pre-K",
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
];

const steps = [
  {
    title: "Submit the form",
    copy: "Tell us about your student and the program you're interested in.",
  },
  {
    title: "We follow up",
    copy: "Our team contacts you to confirm details, answer questions, and check availability.",
  },
  {
    title: "Get ready to explore",
    copy: "Complete enrollment and prepare for a session full of discovery.",
  },
];

export default function Registration() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Pre-fill the form when another CTA (e.g. "View Session") sends an intent.
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<RegisterIntent>).detail;
      setForm((prev) => ({
        ...prev,
        program: detail.program ?? prev.program,
        sessionId: detail.sessionId ?? prev.sessionId,
      }));
    };
    window.addEventListener(REGISTER_EVENT, handler);
    return () => window.removeEventListener(REGISTER_EVENT, handler);
  }, []);

  const sessionOptions = useMemo(() => {
    if (form.program === "enrichment" || form.program === "leadership") {
      return sessions.filter((s) => s.program === form.program);
    }
    return sessions;
  }, [form.program]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): Partial<Record<keyof FormState, string>> => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.studentName.trim()) next.studentName = "Please enter the student's name.";
    if (!form.parentName.trim()) next.parentName = "Please enter a parent or guardian name.";
    if (!form.email.trim()) {
      next.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.grade) next.grade = "Please select a grade.";
    if (!form.program) next.program = "Please choose a program.";
    return next;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setReferenceId(`LDTA-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  const fieldClass = (key: keyof FormState) =>
    cn("field", errors[key] && "is-invalid");

  return (
    <section id="register" className="section bg-sky-100/60">
      <Container>
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left panel */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl bg-navy-900 p-8 text-white shadow-xl lg:p-10">
              <span className="eyebrow text-gold-300">Registration</span>
              <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight">
                Ready for Their Next Adventure?
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-sky-200">
                Give your child an opportunity to learn, explore, and experience more
                beyond the classroom.
              </p>

              <ol className="mt-9 space-y-5">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold-400/50 bg-gold-400/10 font-display text-sm font-extrabold text-gold-300">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-extrabold uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-sky-200">
                        {step.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 space-y-3 border-t border-white/12 pt-8">
                <span className="inline-flex items-center gap-2.5 rounded-xl border border-gold-400/40 bg-gold-400/12 px-4 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-300">
                  <Icon name="shield" className="h-4 w-4" />
                  Scholarships Available
                </span>
                <span className="inline-flex items-center gap-2.5 rounded-xl border border-sky-300/40 bg-sky-300/12 px-4 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-sky-200">
                  <Icon name="users" className="h-4 w-4" />
                  Sibling Discounts Available
                </span>
              </div>

              <p className="mt-8 text-[12.5px] leading-relaxed text-sky-200/80">
                Submitting this form starts your registration — it does not guarantee
                enrollment. Our team will contact you to confirm details, availability,
                and tuition assistance options.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={140} className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-white p-7 shadow-lg sm:p-9">
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
                    <Icon name="check" className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-900">
                    Registration started!
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                    Thank you, {form.parentName.split(" ")[0] || "there"}. We've received
                    your interest in{" "}
                    <strong>
                      {form.program === "leadership"
                        ? "Leadership Development"
                        : form.program === "enrichment"
                          ? "Enrichment & Travel Academy"
                          : "our programs"}
                    </strong>
                    . Our team will reach out within 2 business days to confirm details and
                    next steps.
                  </p>
                  <p className="mt-4 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-muted">
                    Reference • {referenceId}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="mt-8 text-[13px] font-bold uppercase tracking-[0.08em] text-gold-600 hover:text-gold-500"
                  >
                    Submit another registration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="studentName" className="field-label">
                        Student Name *
                      </label>
                      <input
                        id="studentName"
                        type="text"
                        className={fieldClass("studentName")}
                        value={form.studentName}
                        onChange={(e) => update("studentName", e.target.value)}
                        placeholder="e.g. Jordan Lee"
                        autoComplete="off"
                      />
                      {errors.studentName && (
                        <p className="field-error">{errors.studentName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="parentName" className="field-label">
                        Parent / Guardian Name *
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        className={fieldClass("parentName")}
                        value={form.parentName}
                        onChange={(e) => update("parentName", e.target.value)}
                        placeholder="e.g. Alex Lee"
                        autoComplete="off"
                      />
                      {errors.parentName && (
                        <p className="field-error">{errors.parentName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="field-label">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={fieldClass("email")}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                      {errors.email && <p className="field-error">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="field-label">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={fieldClass("phone")}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="(555) 000-0000"
                        autoComplete="tel"
                      />
                      {errors.phone && <p className="field-error">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="grade" className="field-label">
                        Student Grade *
                      </label>
                      <select
                        id="grade"
                        className={fieldClass("grade")}
                        value={form.grade}
                        onChange={(e) => update("grade", e.target.value)}
                      >
                        <option value="">Select grade</option>
                        {gradeOptions.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                      {errors.grade && <p className="field-error">{errors.grade}</p>}
                    </div>
                    <div>
                      <label htmlFor="program" className="field-label">
                        Program *
                      </label>
                      <select
                        id="program"
                        className={fieldClass("program")}
                        value={form.program}
                        onChange={(e) =>
                          update("program", e.target.value as ProgramChoice)
                        }
                      >
                        <option value="">Select program</option>
                        <option value="enrichment">Enrichment & Travel Academy</option>
                        <option value="leadership">Leadership Development</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                      {errors.program && (
                        <p className="field-error">{errors.program}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="sessionId" className="field-label">
                        Preferred Session
                      </label>
                      <select
                        id="sessionId"
                        className="field"
                        value={form.sessionId}
                        onChange={(e) => update("sessionId", e.target.value)}
                      >
                        <option value="">No preference yet</option>
                        {form.program === "enrichment" ||
                        form.program === "leadership" ? (
                          sessionOptions.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name} — {s.dates}
                            </option>
                          ))
                        ) : (
                          <>
                            <optgroup label="Enrichment & Travel Academy">
                              {sessions
                                .filter((s) => s.program === "enrichment")
                                .map((s) => (
                                  <option key={s.id} value={s.id}>
                                    {s.name} — {s.dates}
                                  </option>
                                ))}
                            </optgroup>
                            <optgroup label="Leadership Development">
                              {sessions
                                .filter((s) => s.program === "leadership")
                                .map((s) => (
                                  <option key={s.id} value={s.id}>
                                    {s.name} — {s.dates}
                                  </option>
                                ))}
                            </optgroup>
                          </>
                        )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="children" className="field-label">
                        Number of Children
                      </label>
                      <select
                        id="children"
                        className="field"
                        value={form.children}
                        onChange={(e) => update("children", e.target.value)}
                      >
                        <option value="1">1 child</option>
                        <option value="2">2 children</option>
                        <option value="3">3 children</option>
                        <option value="4">4 or more children</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="questions" className="field-label">
                        Additional Questions
                      </label>
                      <textarea
                        id="questions"
                        rows={4}
                        className="field resize-y"
                        value={form.questions}
                        onChange={(e) => update("questions", e.target.value)}
                        placeholder="Anything else we should know? (allergies, scheduling, scholarship questions, etc.)"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] bg-gold-400 px-6 py-4 text-[13.5px] font-bold uppercase tracking-[0.09em] text-navy-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-md"
                  >
                    Start Registration
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </button>
                  <p className="mt-4 text-center text-[12.5px] text-muted">
                    Scholarships and sibling discounts are applied during enrollment
                    confirmation.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
