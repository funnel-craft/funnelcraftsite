import { useState, useEffect } from 'react';
import { useBookForm } from '../../context/BookFormContext';

const results = [
  { title: 'B2B Martech Startup', cpd: '$127', cac: '$890', mrr: '+$52k' },
  { title: 'AI Software Development', cpd: '$89', roas: '4.2x', mrr: '+$215k' },
  { title: 'B2B Data Enrichment', cpd: '$156', payback: '28 days', mrr: '+$180k' },
  { title: 'B2B Sales Automation', cpd: '$73', roas: '3.8x', mrr: '+$410k' },
  { title: 'B2B AI GTM Platform', cpd: '$112', cac: '$1,200', mrr: '+$95k' },
];

export default function MoreResults() {
  const { openForm } = useBookForm();
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    if (!showVideoModal) return;
    if (typeof window !== 'undefined' && window.iconify) window.iconify.scan();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setShowVideoModal(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [showVideoModal]);

  return (
    <>
      <section className="container mx-auto px-6 max-w-6xl mb-32">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">More Client Results</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((r, i) => (
          <div
            key={r.title}
            className={`glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors reveal ${i === 1 ? 'delay-100' : ''} ${i === 2 ? 'delay-200' : ''}`}
          >
            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="aspect-video w-full bg-white/5 rounded-lg mb-4 border border-white/5 flex flex-col items-center justify-center gap-3 text-white/30 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-inset"
            >
              <span className="w-12 h-12 rounded-full bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/30 group-hover:scale-105 transition-transform pointer-events-none" aria-hidden>
                <span className="iconify" data-icon="lucide:play" data-width="24" />
              </span>
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider pointer-events-none">Video testimonial</span>
            </button>
            <div className="text-sm font-medium text-white mb-4">{r.title}</div>
            <div className="grid grid-cols-2 gap-y-2 text-xs">
              <div className="text-white/50">Cost Per Demo</div>
              <div className="text-right text-white">{r.cpd}</div>
              {r.cac && (
                <>
                  <div className="text-white/50">CAC</div>
                  <div className="text-right text-white">{r.cac}</div>
                </>
              )}
              {r.roas && (
                <>
                  <div className="text-white/50">ROAS</div>
                  <div className="text-right text-white">{r.roas}</div>
                </>
              )}
              {r.payback && (
                <>
                  <div className="text-white/50">Payback</div>
                  <div className="text-right text-white">{r.payback}</div>
                </>
              )}
              <div className="text-white/50">MRR Added</div>
              <div className="text-right text-brand-primary font-bold">{r.mrr}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16 reveal">
        <button
          type="button"
          onClick={openForm}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:brightness-110 transition-all duration-300 border border-white/20"
        >
          Book A Call
          <span className="iconify" data-icon="lucide:calendar" data-width="16" />
        </button>
        <p className="text-xs text-white/40 font-light mt-3">Free 30-minute strategy call. No obligation.</p>
      </div>
    </section>

      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button type="button" onClick={() => setShowVideoModal(false)} className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-label="Close" />
          <div className="relative w-full max-w-md rounded-2xl glass-panel border border-white/10 shadow-2xl modal-in p-8">
            <button type="button" onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors" aria-label="Close">
              <span className="iconify" data-icon="lucide:x" data-width="20" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                <span className="iconify text-brand-primary" data-icon="lucide:video" data-width="28" />
              </div>
              <h3 className="text-xl font-serif text-white tracking-tight mb-2">Video testimonial</h3>
              <p className="text-white/60 text-sm font-light">On your real site this will open the video testimonial.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
