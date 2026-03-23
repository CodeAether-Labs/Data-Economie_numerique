/** Illustration légère (SVG) — réseau / flux de données, sans image lourde */
const HeroVisual = ({ className = "" }: { className?: string }) => (
  <div
    className={`relative mx-auto max-w-md lg:max-w-none ${className}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 400 320"
      className="w-full h-auto text-primary/35 drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hv-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(199 89% 48%)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(271 81% 56%)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect
        x="40"
        y="32"
        width="320"
        height="256"
        rx="20"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="url(#hv-grad)"
        className="text-primary/25"
      />
      <circle cx="120" cy="120" r="10" fill="hsl(199 89% 48%)" opacity="0.55" />
      <circle cx="200" cy="88" r="8" fill="hsl(187 85% 53%)" opacity="0.5" />
      <circle cx="280" cy="140" r="10" fill="hsl(271 81% 56%)" opacity="0.45" />
      <circle cx="160" cy="200" r="9" fill="hsl(199 89% 48%)" opacity="0.4" />
      <circle cx="260" cy="220" r="8" fill="hsl(330 81% 60%)" opacity="0.35" />
      <path
        d="M120 120 L200 88 M200 88 L280 140 M120 120 L160 200 M280 140 L260 220 M160 200 L260 220"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.45"
      />
      <rect x="88" y="248" width="224" height="36" rx="8" fill="currentColor" fillOpacity="0.08" />
      <rect x="88" y="248" width="120" height="36" rx="8" fill="hsl(199 89% 48%)" fillOpacity="0.15" />
    </svg>
  </div>
);

export default HeroVisual;
