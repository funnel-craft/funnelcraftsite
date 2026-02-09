import { useBookForm } from '../../context/BookFormContext';

export default function Hero() {
  const { openForm } = useBookForm();

  return (
    <section className="container mx-auto px-6 max-w-6xl text-center mb-20 md:mb-24 relative">
      <div className="reveal active flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/20 bg-brand-primary/5 backdrop-blur-sm mb-6 md:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-primary" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
          </span>
          <span className="text-[10px] md:text-[11px] font-medium text-brand-primary tracking-wide uppercase">For Coaches & Course Creators</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white tracking-tight leading-[1.05] mb-6 md:mb-8 max-w-5xl">
          I Help Coaches And Course Creators Acquire Clients Profitably, <span className="text-gradient">Halve Their CAC</span>, And Add $1M+ In Revenue Within 12 Months
        </h1>

        <p className="text-base md:text-lg font-light text-white/50 max-w-2xl leading-relaxed mb-8 md:mb-10 mx-auto">
          By working with you one-on-one to build a repeatable system that generates leads, books qualified calls, and converts at 3x ROAS or better.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4">
          <button
            type="button"
            onClick={openForm}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020402_0%,#10b981_50%,#020402_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-panel px-8 py-3.5 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-[#0f1016]">
              Let&apos;s Talk About Your Funnel
              <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
