import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import {
  NAV_LINKS,
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  BUSINESS_NAME,
  ASTROLOGER_NAME,
  TAGLINE,
} from "@/lib/site";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative mt-8 overflow-hidden bg-maroon-900 text-cream/85">
      <div className="temple-pattern absolute inset-0 opacity-[0.5]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="container-page relative py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image
                  src="/logo.jpeg"
                  alt={`${BUSINESS_NAME} logo`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <h3 className="font-serif text-xl font-semibold text-cream">
                {BUSINESS_NAME}
              </h3>
            </div>
            <p className="mt-1 text-sm font-medium text-gold-soft">
              {ASTROLOGER_NAME}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {TAGLINE}. Honest, confidential Vedic guidance to help you find
              peace and love again.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Reach Out
            </h4>
            <ul className="mt-4 space-y-3.5">
              <li>
                <Link
                  href={PHONE_TEL}
                  className="group flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-gold-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 ring-1 ring-gold/30 transition-colors group-hover:bg-gold/20">
                    <Phone className="h-4 w-4" strokeWidth={2} />
                  </span>
                  {PHONE_DISPLAY}
                </Link>
              </li>
              <li>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-cream/80 transition-colors hover:text-gold-soft"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 ring-1 ring-gold/30 transition-colors group-hover:bg-gold/20">
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  </span>
                  WhatsApp Chat
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/60">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 ring-1 ring-gold/20">
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                </span>
                Consultations available across India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-center text-xs text-cream/55 sm:flex-row sm:text-left">
          <p>
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-cream/45">
            For guidance &amp; consultation purposes. Results may vary.
          </p>
          <p className="text-cream/45">
            Developed by{" "}
            <Link
              href="https://webcros.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-soft transition-colors hover:text-gold"
            >
              webcros
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
