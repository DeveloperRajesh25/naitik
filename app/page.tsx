import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  PhoneCall,
  Lock,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import ServiceCard from "@/components/ServiceCard";
import CTAButton from "@/components/CTAButton";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SERVICES, TRUST_POINTS, ASTROLOGER_NAME } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden pb-24 md:pb-0">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Reunited />
        <CTABanner />
        <div className="h-16 sm:h-20" />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial">
      <div className="temple-pattern absolute inset-0 opacity-60" aria-hidden />
      {/* warm glow accents */}
      <div
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow justify-center lg:justify-start">
              <span className="h-px w-6 bg-gold/70" aria-hidden />
              Trusted Vedic Love &amp; Vashikaran Specialist
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-ink text-balance sm:text-5xl lg:text-6xl">
              Find Your Way{" "}
              <span className="relative whitespace-nowrap text-maroon">
                Back to Love
                <span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-gold/0 via-gold to-gold/0"
                  aria-hidden
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty lg:mx-0">
              Guided by {ASTROLOGER_NAME}, with years of experience in authentic
              Vedic astrology &amp; Vashikaran. Honest, confidential help for
              love, marriage and relationship troubles — no judgement, only care.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
              <CTAButton variant="call" size="lg" className="w-full sm:w-auto" />
              <CTAButton
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-muted lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-gold-700" /> 100% Confidential
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-gold-700" /> Honest Guidance
              </span>
              <span className="inline-flex items-center gap-1.5">
                <PhoneCall className="h-4 w-4 text-gold-700" /> Available Now
              </span>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal from="left" delay={0.15} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-maroon/15 blur-xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 bg-cream-dark shadow-card-hover">
              <Image
                src="/pandit-naitik.svg"
                alt={`${ASTROLOGER_NAME}, Love Problem & Vashikaran Specialist`}
                width={600}
                height={600}
                priority
                className="h-auto w-full object-cover"
              />
              {/* caption bar */}
              <div className="flex items-center justify-between gap-3 border-t border-gold/20 bg-cream/80 px-5 py-4 backdrop-blur-sm">
                <div>
                  <p className="font-serif text-lg font-semibold text-maroon-800">
                    {ASTROLOGER_NAME}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                    Love Problem Specialist
                  </p>
                </div>
                <Sparkles className="h-6 w-6 shrink-0 text-gold-700" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="gold-divider mx-auto max-w-5xl" />
    </section>
  );
}

/* ------------------------------- ABOUT ------------------------------- */
function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-maroon-900 text-cream shadow-card">
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:p-16">
            <div
              className="temple-pattern absolute inset-0 opacity-40"
              aria-hidden
            />

            {/* Portrait medallion */}
            <Reveal from="right" className="relative mx-auto lg:mx-0">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64">
                <span
                  className="absolute inset-0 animate-shimmer rounded-full ring-2 ring-gold/40"
                  aria-hidden
                />
                <span
                  className="absolute -inset-2 rounded-full border border-gold/25"
                  aria-hidden
                />
                <div className="absolute inset-2 overflow-hidden rounded-full border-2 border-gold/60 shadow-card-hover">
                  <Image
                    src="/pandit-naitik.svg"
                    alt={`Portrait of ${ASTROLOGER_NAME}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Bio */}
            <div className="relative">
              <Reveal>
                <span className="eyebrow text-gold-soft">
                  <span className="h-px w-6 bg-gold/70" aria-hidden />
                  About {ASTROLOGER_NAME}
                </span>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl">
                  A calm, trusted guide in your hardest moments
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-5 space-y-4 text-cream/80 text-pretty">
                  <p className="leading-relaxed">
                    {ASTROLOGER_NAME} has devoted years to the practice of
                    authentic Vedic astrology and Vashikaran, helping people
                    navigate love, marriage and relationship difficulties with
                    clarity and compassion.
                  </p>
                  <p className="leading-relaxed">
                    His mission is simple — to offer honest guidance, complete
                    privacy and dedicated support. Every remedy is shaped around
                    your unique situation, and every conversation is treated with
                    the dignity and confidentiality it deserves.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-cream/15 pt-6">
                  {[
                    { value: "Vedic", label: "Authentic Practice" },
                    { value: "Years", label: "Of Experience" },
                    { value: "100%", label: "Confidential" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <p className="font-serif text-2xl font-semibold text-gold-soft">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-tight text-cream/65">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ----------------------------- */
function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="How I Can Help"
          title="Compassionate Solutions for Matters of the Heart"
          subtitle="From rekindling a lost love to restoring harmony at home — gentle, time-honoured remedies for every situation."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink-muted">
            Not sure where to begin? A confidential conversation is the first
            step.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton variant="call" label="Talk to Pandit Ji" />
            <CTAButton variant="whatsapp" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- WHY CHOOSE US ---------------------------- */
function WhyChooseUs() {
  return (
    <section className="relative py-16 sm:py-20">
      <div
        className="absolute inset-0 bg-cream-dark/60"
        aria-hidden
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Why People Trust Us"
          title="Guidance Built on Honesty & Care"
          subtitle="The reassurance you deserve when you're going through something painful."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={(i % 4) * 0.08}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-gold/20 bg-white/70 p-6 text-center shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon/[0.06] text-maroon-700 ring-1 ring-inset ring-gold/30">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- REUNITED ------------------------------ */
function Reunited() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-card">
          {/* Warm-toned imagery with soft overlay */}
          <Image
            src="/reunited.svg"
            alt="A couple reunited, finding peace together"
            width={800}
            height={640}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-maroon-900/90 via-maroon-900/70 to-maroon-900/40"
            aria-hidden
          />
          <div className="temple-pattern absolute inset-0 opacity-20" aria-hidden />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <Reveal className="max-w-xl">
              <span className="eyebrow text-gold-soft">
                <span className="h-px w-6 bg-gold/70" aria-hidden />
                Finding Peace Again
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl">
                Every relationship deserves a chance to heal
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/80 text-pretty">
                So many have walked in carrying heartbreak and walked out with
                hope — couples reunited, families at peace, and hearts that
                learned to trust again. Wherever you are right now, you don&apos;t
                have to face it alone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton variant="call" size="lg" className="w-full sm:w-auto" />
                <CTAButton
                  variant="whatsapp"
                  size="lg"
                  className="w-full border-gold/60 bg-cream/10 text-cream hover:bg-cream/20 sm:w-auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
