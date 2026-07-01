"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { NAV_LINKS, PHONE_TEL, ASTROLOGER_NAME } from "@/lib/site";
import CTAButton from "./CTAButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gold/20 bg-cream/90 shadow-[0_2px_20px_-12px_rgba(28,20,16,0.4)] backdrop-blur-md"
          : "border-b border-transparent bg-cream/60 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-maroon/5 transition-colors group-hover:bg-maroon/10">
            <Image
              src="/logo.jpeg"
              alt="Love Specialist Astrologer logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-maroon-800 sm:text-xl">
              Love Specialist
            </span>
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-gold-700">
              Astrologer
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-ink-soft transition-colors hover:text-maroon after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTAButton variant="call" size="md" label="Call / WhatsApp" />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={PHONE_TEL}
            aria-label="Call now"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-cream shadow-card transition-transform active:scale-95"
          >
            <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-white/60 text-maroon-800 transition-colors active:bg-gold/10"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={[
          "md:hidden overflow-hidden border-t border-gold/15 bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-gold/10 hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <CTAButton variant="call" size="md" fullWidth />
            <CTAButton variant="whatsapp" size="md" fullWidth />
          </div>
          <p className="mt-3 px-1 text-center text-xs text-ink-muted">
            Speak with {ASTROLOGER_NAME} — 100% confidential
          </p>
        </nav>
      </div>
    </header>
  );
}
