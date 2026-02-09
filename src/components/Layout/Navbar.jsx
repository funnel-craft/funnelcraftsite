import { useBookForm } from '../../context/BookFormContext';

export default function Navbar() {
  const { openForm } = useBookForm();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] max-w-5xl z-50 transition-all duration-300">
      <div className="glass-panel rounded-full p-2 pl-4 md:pl-6 flex items-center justify-between shadow-2xl shadow-brand-primary/10">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <span className="font-serif text-lg tracking-tight text-white/95">
            <span className="text-brand-primary">Funnel</span>craft
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button type="button" onClick={() => scrollTo('offer')} className="text-xs font-normal text-white/60 hover:text-white transition-colors">What I Offer</button>
          <button type="button" onClick={() => scrollTo('case-studies')} className="text-xs font-normal text-white/60 hover:text-white transition-colors">Case Studies</button>
          <button type="button" onClick={() => scrollTo('process')} className="text-xs font-normal text-white/60 hover:text-white transition-colors">How It Works</button>
          <button type="button" onClick={() => scrollTo('faq')} className="text-xs font-normal text-white/60 hover:text-white transition-colors">FAQ</button>
        </div>

        <div className="flex items-center gap-3">
          <button type="button" onClick={openForm} className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 md:px-5 py-2 md:py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/45 hover:brightness-110 transition-all duration-300 border border-white/20">
            Book A Call
            <span className="iconify" data-icon="lucide:arrow-right" data-width="12" />
          </button>
        </div>
      </div>
    </nav>
  );
}
