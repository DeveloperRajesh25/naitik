import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Service grid card — gold-bordered, lifts gently on hover.
 */
export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-gold/20 bg-white/70 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-card-hover">
      {/* Icon badge */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/[0.06] text-maroon-700 ring-1 ring-inset ring-gold/25 transition-colors duration-300 group-hover:bg-maroon group-hover:text-cream group-hover:ring-maroon">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </div>

      <h3 className="font-serif text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">
        {description}
      </p>

      {/* Decorative corner accent */}
      <span className="pointer-events-none absolute right-5 top-6 h-1.5 w-1.5 rounded-full bg-gold/40 transition-all duration-300 group-hover:scale-150 group-hover:bg-gold" />
    </div>
  );
}
