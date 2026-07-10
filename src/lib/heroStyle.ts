// Flagship residential pages keep the full-bleed 100svh mobile hero with the
// overlaid title; every other project shows the hero at its natural ratio
// below the navbar with the title in flow (client preference).
export const FULL_BLEED_HERO_SLUGS = new Set([
  "golden-luxuria",
  "golden-heaven",
  "golden-residency",
]);

// Mobile-only object-position nudge for hero photos whose focal point is off
// to one side on narrow crops (client-requested per-project adjustment).
export const HERO_MOBILE_OBJECT_POSITION: Record<string, string> = {
  "golden-square-bharuch": "object-[calc(50%-30px)_top] md:object-top",
};
