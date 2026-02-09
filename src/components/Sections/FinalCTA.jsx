import { useBookForm } from '../../context/BookFormContext';

export default function FinalCTA() {
  const { openForm } = useBookForm();

  return (
    <section id="book" className="container mx-auto px-6 max-w-4xl text-center mb-24 mt-24">
      <div className="glass-panel p-10 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden reveal">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none" />
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6 relative z-10">Let&apos;s Talk About Your Funnel</h2>
        <p className="text-base md:text-lg text-white/50 font-light mb-10 max-w-lg mx-auto relative z-10">
          Book a free 30-minute strategy call. I&apos;ll analyze your current funnel, identify the biggest opportunities, and show you exactly how you can improve your ads.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button type="button" onClick={openForm} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:brightness-110 transition-all duration-300 border border-white/20">
            Book A Call
            <span className="iconify" data-icon="lucide:calendar" data-width="18" />
          </button>
        </div>
      </div>
    </section>
  );
}
