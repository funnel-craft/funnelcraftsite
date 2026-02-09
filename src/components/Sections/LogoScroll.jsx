const LOGOS = [
  'Instantly.ai',
  'ListKit',
  'TXTCART',
  'Trustworthy',
  'Buddy Punch',
  'Float',
  'Simplesat',
  'GROWTHSPACE',
  'Submagic',
  'Inframail',
  'Promotix',
  'BookYourData',
];

export default function LogoScroll() {
  return (
    <section className="w-full border-y border-white/5 bg-white/[0.01] py-12 mb-32 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em] px-4">Trusted by 50+ Coaches & Course Creators</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-16 whitespace-nowrap opacity-40 group-hover:opacity-80 transition-all duration-500 pl-4 items-center">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <span key={`${name}-${i}`} className="text-lg font-bold font-sans">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
