import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

/**
 * Sticky bottom action bar shown only on mobile.
 * Keeps Call + WhatsApp one tap away on every scroll position —
 * critical for an audience searching urgently for help.
 */
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="border-t border-gold/30 bg-cream/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md shadow-[0_-6px_24px_-12px_rgba(28,20,16,0.45)]">
        <div className="grid grid-cols-2 gap-2.5">
          <Link
            href={PHONE_TEL}
            aria-label="Call Pandit Naitik Ji now"
            className="flex items-center justify-center gap-2 rounded-full bg-maroon py-3 text-sm font-semibold text-cream shadow-card transition-transform active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.2} />
            Call Now
          </Link>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Pandit Naitik Ji on WhatsApp"
            className="flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold/15 py-3 text-sm font-semibold text-maroon-800 transition-transform active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
