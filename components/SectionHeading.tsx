import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Center the heading block (default) or left-align. */
  align?: "center" | "left";
  /** Render heading text in cream for dark backgrounds. */
  invert?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <span
          className={`eyebrow ${invert ? "text-gold-soft" : ""}`}
        >
          <span className="h-px w-6 bg-gold/70" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-balance sm:text-4xl ${
          invert ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-base leading-relaxed text-pretty ${
            invert ? "text-cream/75" : "text-ink-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      <span
        className={`mt-6 block h-px w-16 bg-gradient-to-r from-gold/0 via-gold to-gold/0 ${
          align === "center" ? "" : "self-start"
        }`}
        aria-hidden
      />
    </Reveal>
  );
}
