import Link from "next/link";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type CTABannerProps = {
  heading?: string;
  subtext?: string;
};

/**
 * Bold maroon/gold conversion banner with the phone number shown large.
 * Reused on Home and Contact.
 */
export default function CTABanner({
  heading = "Facing Love or Relationship Problems?",
  subtext = "Get confidential, compassionate guidance today. Your story stays private — your peace comes first.",
}: CTABannerProps) {
  return (
    <section className="container-page">
      <Reveal className="relative overflow-hidden rounded-3xl bg-maroon px-6 py-12 text-center shadow-card-hover sm:px-12 sm:py-16">
        {/* Decorative texture + glow */}
        <div className="temple-pattern absolute inset-0 opacity-30" aria-hidden />
        <div
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow text-gold-soft">
            <span className="h-px w-6 bg-gold/70" aria-hidden />
            Help Is One Call Away
            <span className="h-px w-6 bg-gold/70" aria-hidden />
          </span>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80 text-pretty">
            {subtext}
          </p>

          {/* Large clickable phone number */}
          <Link
            href={PHONE_TEL}
            className="group mt-7 inline-flex items-baseline gap-2 font-serif text-3xl font-semibold text-gold-soft transition-colors hover:text-gold sm:text-4xl"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <span className="text-base font-sans font-medium uppercase tracking-widest text-cream/60">
              Call
            </span>
            {PHONE_DISPLAY}
          </Link>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton variant="call" size="lg" className="w-full sm:w-auto" />
            <CTAButton
              variant="whatsapp"
              size="lg"
              className="w-full border-gold/60 bg-cream/10 text-cream hover:bg-cream/20 sm:w-auto"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
