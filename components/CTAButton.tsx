import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

type Variant = "call" | "whatsapp";
type Size = "md" | "lg";

type CTAButtonProps = {
  variant: Variant;
  size?: Size;
  /** Override the default label text. */
  label?: string;
  className?: string;
  /** Stretch to fill its container width. */
  fullWidth?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const styles: Record<Variant, string> = {
  // Saffron/maroon solid — primary call action
  call: "bg-maroon text-cream shadow-card hover:bg-maroon-800 hover:shadow-card-hover hover:-translate-y-0.5 focus-visible:ring-maroon",
  // WhatsApp — gold-bordered, warm
  whatsapp:
    "border border-gold/60 bg-gold/10 text-maroon-800 hover:bg-gold/20 hover:-translate-y-0.5 hover:shadow-card focus-visible:ring-gold",
};

/**
 * Reusable Call / WhatsApp action button.
 * Always points at the canonical phone number from lib/site.
 */
export default function CTAButton({
  variant,
  size = "md",
  label,
  className = "",
  fullWidth = false,
}: CTAButtonProps) {
  const isCall = variant === "call";
  const href = isCall ? PHONE_TEL : WHATSAPP_URL;
  const Icon = isCall ? Phone : MessageCircle;
  const text = label ?? (isCall ? "Call Now" : "WhatsApp Us");

  return (
    <Link
      href={href}
      target={isCall ? undefined : "_blank"}
      rel={isCall ? undefined : "noopener noreferrer"}
      aria-label={isCall ? "Call Pandit Naitik Ji now" : "Message on WhatsApp"}
      className={[
        base,
        sizes[size],
        styles[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      <Icon
        className="h-[1.15em] w-[1.15em] transition-transform duration-300 group-hover:scale-110"
        strokeWidth={2}
        aria-hidden="true"
      />
      {text}
    </Link>
  );
}
