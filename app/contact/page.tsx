import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Lock,
  HeartHandshake,
  Clock,
  Check,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import {
  SERVICES,
  TRUST_POINTS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  ASTROLOGER_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Confidential Love Problem & Vashikaran Help",
  description:
    "Get confidential guidance from Pandit Naitik Ji for love problems, vashikaran, love marriage and relationship issues. Call or WhatsApp 96600 07699 — private and judgement-free.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <ContactHero />
        <ContactCards />
        <Reassurance />
        <ServiceRecap />
        <div className="h-16 sm:h-20" />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}

/* ----------------------------- HERO ----------------------------- */
function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial">
      <div className="temple-pattern absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div className="container-page relative py-16 text-center sm:py-20">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold/70" aria-hidden />
            Get in Touch
            <span className="h-px w-6 bg-gold/70" aria-hidden />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-ink text-balance sm:text-5xl">
            Confidential Guidance,{" "}
            <span className="text-maroon">One Call Away</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
            Reaching out takes courage — and {ASTROLOGER_NAME} is here to listen
            with warmth, never judgement. Share what you&apos;re going through,
            and take the first step toward peace of mind.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/60 px-4 py-2 text-sm font-medium text-maroon-800 shadow-card backdrop-blur-sm">
            <Lock className="h-4 w-4 text-gold-700" />
            Every conversation is 100% private
          </div>
        </Reveal>
      </div>
      <div className="gold-divider mx-auto max-w-5xl" />
    </section>
  );
}

/* -------------------------- CONTACT CARDS -------------------------- */
function ContactCards() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-page">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Call */}
          <Reveal>
            <ContactCard
              kind="call"
              href={PHONE_TEL}
              icon={Phone}
              eyebrow="Speak Directly"
              title="Call Now"
              subtitle="Talk one-to-one for immediate guidance"
            />
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={0.1}>
            <ContactCard
              kind="whatsapp"
              href={WHATSAPP_URL}
              icon={MessageCircle}
              eyebrow="Message Privately"
              title="WhatsApp Us"
              subtitle="Prefer to type? Send a message anytime"
            />
          </Reveal>
        </div>

        {/* Availability note */}
        <Reveal delay={0.15}>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-muted">
            <Clock className="h-4 w-4 text-gold-700" />
            Available for consultations — your message is always welcome
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type ContactCardProps = {
  kind: "call" | "whatsapp";
  href: string;
  icon: typeof Phone;
  eyebrow: string;
  title: string;
  subtitle: string;
};

function ContactCard({
  kind,
  href,
  icon: Icon,
  eyebrow,
  title,
  subtitle,
}: ContactCardProps) {
  const isCall = kind === "call";
  return (
    <Link
      href={href}
      target={isCall ? undefined : "_blank"}
      rel={isCall ? undefined : "noopener noreferrer"}
      aria-label={
        isCall ? `Call ${PHONE_DISPLAY}` : `WhatsApp ${PHONE_DISPLAY}`
      }
      className={[
        "group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:p-10",
        isCall
          ? "border-transparent bg-maroon text-cream"
          : "border-gold/30 bg-white/70 text-ink backdrop-blur-sm hover:border-gold/60",
      ].join(" ")}
    >
      <div
        className="temple-pattern absolute inset-0 opacity-25"
        aria-hidden
      />
      <div className="relative flex flex-col items-center">
        <span
          className={[
            "flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-inset transition-transform duration-300 group-hover:scale-105",
            isCall
              ? "bg-cream/15 text-gold-soft ring-gold/40"
              : "bg-maroon/[0.06] text-maroon-700 ring-gold/30",
          ].join(" ")}
        >
          <Icon className="h-8 w-8" strokeWidth={1.75} />
        </span>

        <span
          className={[
            "mt-5 text-xs font-semibold uppercase tracking-[0.2em]",
            isCall ? "text-gold-soft" : "text-maroon",
          ].join(" ")}
        >
          {eyebrow}
        </span>
        <h2 className="mt-2 font-serif text-2xl font-semibold">{title}</h2>
        <p
          className={[
            "mt-2 text-sm",
            isCall ? "text-cream/75" : "text-ink-muted",
          ].join(" ")}
        >
          {subtitle}
        </p>

        {/* Big tap-friendly number */}
        <span
          className={[
            "mt-6 font-serif text-3xl font-semibold tracking-wide sm:text-4xl",
            isCall ? "text-cream" : "text-maroon-800",
          ].join(" ")}
        >
          {PHONE_DISPLAY}
        </span>

        <span
          className={[
            "mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
            isCall
              ? "bg-cream text-maroon-800 group-hover:bg-gold-soft"
              : "bg-gold/15 text-maroon-800 ring-1 ring-gold/50 group-hover:bg-gold/25",
          ].join(" ")}
        >
          <Icon className="h-4 w-4" strokeWidth={2.2} />
          {isCall ? "Tap to Call" : "Tap to Chat"}
        </span>
      </div>
    </Link>
  );
}

/* --------------------------- REASSURANCE --------------------------- */
function Reassurance() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-cream-dark/60" aria-hidden />
      <div className="container-page relative">
        <div className="overflow-hidden rounded-3xl bg-maroon-900 text-cream shadow-card">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div
              className="temple-pattern absolute inset-0 opacity-40"
              aria-hidden
            />
            <div className="relative">
              <Reveal className="max-w-2xl">
                <span className="eyebrow text-gold-soft">
                  <span className="h-px w-6 bg-gold/70" aria-hidden />
                  You Are Safe Here
                </span>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl">
                  No judgement. No pressure. Only honest help.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-cream/80 text-pretty">
                  We understand that matters of the heart are deeply personal.
                  Whatever you&apos;re carrying — heartbreak, doubt, distance or
                  family conflict — it stays strictly between you and Pandit Ji.
                </p>
              </Reveal>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {TRUST_POINTS.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <Reveal key={point.title} delay={(i % 2) * 0.08}>
                      <div className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 transition-colors hover:bg-cream/[0.08]">
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-soft ring-1 ring-gold/30">
                          <Icon className="h-5 w-5" strokeWidth={1.7} />
                        </span>
                        <div>
                          <h3 className="font-serif text-base font-semibold text-cream">
                            {point.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-cream/70">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- SERVICE RECAP -------------------------- */
function ServiceRecap() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Help With"
          title="Areas of Guidance"
          subtitle="A range of compassionate remedies — reach out about any of these, or simply describe your situation."
        />

        <div className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.06} as="div">
              <div className="flex items-center gap-3 rounded-xl border border-gold/15 bg-white/60 px-4 py-3.5 shadow-card backdrop-blur-sm transition-colors hover:border-gold/40">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-maroon/[0.06] text-maroon-700 ring-1 ring-inset ring-gold/30">
                  <Check className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="text-sm font-medium text-ink-soft">
                  {service.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Final nudge */}
        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-gold/25 bg-gradient-to-br from-gold/10 to-cream-dark/40 px-6 py-10 text-center">
            <HeartHandshake className="h-9 w-9 text-maroon" strokeWidth={1.6} />
            <h3 className="font-serif text-2xl font-semibold text-ink text-balance">
              Take the first step toward peace today
            </h3>
            <p className="max-w-md text-sm text-ink-muted text-pretty">
              One honest conversation can change everything. Pandit Naitik Ji is
              ready to listen.
            </p>
            <Link
              href={PHONE_TEL}
              className="mt-1 font-serif text-3xl font-semibold text-maroon transition-colors hover:text-maroon-800 sm:text-4xl"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </Link>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-7 py-3.5 text-sm font-semibold text-cream shadow-card transition-all hover:-translate-y-0.5 hover:bg-maroon-800 hover:shadow-card-hover"
              >
                <Phone className="h-4 w-4" /> Call Now
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-7 py-3.5 text-sm font-semibold text-maroon-800 transition-all hover:-translate-y-0.5 hover:bg-gold/20"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
