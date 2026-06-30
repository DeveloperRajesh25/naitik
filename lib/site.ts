import {
  Heart,
  ShieldCheck,
  Users,
  Flame,
  Link2,
  Moon,
  HeartHandshake,
  UserCog,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/** Single source of truth for contact details. */
export const PHONE_DISPLAY = "96600 07699";
export const PHONE_RAW = "9660007699";
export const PHONE_TEL = "tel:+919660007699";
export const WHATSAPP_URL =
  "https://wa.me/919660007699?text=Namaste%20Pandit%20Naitik%20Ji%2C%20I%20need%20guidance%20with%20a%20love%20%2F%20relationship%20matter.";

export const BUSINESS_NAME = "Love Specialist Astrologer";
export const ASTROLOGER_NAME = "Pandit Naitik Ji";
export const TAGLINE = "Confidential Vashikaran & Love Problem Solutions";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** The 9 core services — shared by Home grid and Contact recap. */
export const SERVICES: Service[] = [
  {
    title: "Love Problem Solutions",
    description: "Heal misunderstandings and bring warmth back to your bond.",
    icon: Heart,
  },
  {
    title: "Vashikaran Specialist",
    description: "Time-honoured Vedic remedies performed with care and intent.",
    icon: Sparkles,
  },
  {
    title: "Love Marriage Problems",
    description: "Guidance to unite hearts and win family acceptance.",
    icon: HeartHandshake,
  },
  {
    title: "Relationship & Breakup Solutions",
    description: "Find clarity, closure, or a path to reconcile with peace.",
    icon: Link2,
  },
  {
    title: "Husband-Wife Disputes",
    description: "Restore trust, understanding and harmony at home.",
    icon: Users,
  },
  {
    title: "Family Problems",
    description: "Calm tensions and rebuild togetherness within the family.",
    icon: ShieldCheck,
  },
  {
    title: "Ex Love Back Solutions",
    description: "Reconnect with a lost love through sincere remedies.",
    icon: Flame,
  },
  {
    title: "Inter-Caste Love Marriage",
    description: "Compassionate support for couples crossing social barriers.",
    icon: UserCog,
  },
  {
    title: "Negative Energy & Black Magic",
    description: "Cleansing remedies to protect your home and relationship.",
    icon: Moon,
  },
];

export type TrustPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "100% Privacy & Confidentiality",
    description: "Every conversation stays strictly between you and Pandit Ji.",
    icon: ShieldCheck,
  },
  {
    title: "Years of Vedic Experience",
    description: "Deep-rooted knowledge of authentic Vedic astrology.",
    icon: Sparkles,
  },
  {
    title: "Honest & Dedicated Guidance",
    description: "Clear, truthful advice — never false promises.",
    icon: HeartHandshake,
  },
  {
    title: "Personalized Remedies",
    description: "Solutions shaped around your unique situation.",
    icon: UserCog,
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];
