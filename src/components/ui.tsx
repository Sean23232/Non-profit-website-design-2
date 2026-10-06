import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Icon, type IconName } from "./Icons";

/* ---------- Layout ---------- */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("wrap", className)}>{children}</div>;
}

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------- Buttons ---------- */
type ButtonVariant =
  | "gold"
  | "navy"
  | "coral"
  | "ghost-light"
  | "outline-dark"
  | "white";

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold-400 text-navy-950 shadow-sm hover:bg-gold-300 hover:shadow-md hover:-translate-y-0.5",
  navy: "bg-navy-900 text-white shadow-sm hover:bg-navy-700 hover:shadow-md hover:-translate-y-0.5",
  coral: "bg-coral-500 text-white shadow-sm hover:bg-coral-600 hover:shadow-md hover:-translate-y-0.5",
  "ghost-light":
    "border border-white/35 text-white hover:bg-white/10 hover:border-white/60",
  "outline-dark":
    "border border-navy-900/25 text-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900",
  white: "bg-white text-navy-900 shadow-sm hover:bg-sky-100 hover:shadow-md hover:-translate-y-0.5",
};

export function Button({
  children,
  variant = "navy",
  href,
  onClick,
  className,
  type = "button",
  ariaLabel,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[10px] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.09em] transition-all duration-200",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className
  );
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

export function ButtonArrow() {
  return <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />;
}

/* ---------- Section headings ---------- */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  theme = "light",
  titleAs: TitleTag = "h2",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  titleAs?: "h2" | "h3";
  className?: string;
}) {
  const dark = theme === "dark";
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "center" && "[&_.eyebrow]:inline-flex",
        className
      )}
    >
      <span
        className={cn(
          "eyebrow",
          dark ? "text-gold-300" : "text-gold-600"
        )}
      >
        {eyebrow}
      </span>
      <TitleTag
        className={cn(
          "mt-4 font-display font-extrabold tracking-tight",
          TitleTag === "h2"
            ? "text-[2.1rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3rem]"
            : "text-2xl leading-tight",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </TitleTag>
      {lede && (
        <p
          className={cn(
            "mt-5 text-[16.5px] leading-relaxed lg:text-lg",
            align === "center" && "mx-auto max-w-2xl",
            dark ? "text-sky-200" : "text-muted"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/* ---------- Pills / badges ---------- */
export function Pill({
  children,
  tone = "info",
  className,
}: {
  children: ReactNode;
  tone?: "open" | "limited" | "waitlist" | "info";
  className?: string;
}) {
  const tones: Record<string, string> = {
    open: "border-sky-300/60 bg-sky-100 text-navy-700",
    limited: "border-gold-400/50 bg-gold-400/15 text-gold-600",
    waitlist: "border-coral-400/50 bg-coral-400/12 text-coral-600",
    info: "border-line bg-navy-900/5 text-navy-700",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Icon tile ---------- */
export function IconTile({
  name,
  tone = "gold",
  className,
}: {
  name: IconName;
  tone?: "gold" | "sky" | "coral" | "navy";
  className?: string;
}) {
  const tones: Record<string, string> = {
    gold: "bg-gold-400/14 text-gold-600",
    sky: "bg-sky-100 text-navy-700",
    coral: "bg-coral-400/12 text-coral-500",
    navy: "bg-navy-900/6 text-navy-700",
  };
  return (
    <span
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl",
        tones[tone],
        className
      )}
    >
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}
