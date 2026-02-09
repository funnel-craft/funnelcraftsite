import { useState, useEffect } from 'react';

const testimonials = [
  { quote: '[Testimonial placeholder—describe the results and experience working together.]', name: 'Andre', role: 'Founder, ListKit' },
  { quote: '[Testimonial placeholder—describe the results and experience working together.]', name: 'Carson Szeder', role: 'CEO, AI Edtech SaaS' },
  { quote: '[Testimonial placeholder—describe the results and experience working together.]', name: 'Andrew Osborne', role: 'Founder, Upnotify' },
];

export default function Testimonials() {
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
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">What My Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
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
            <div className="text-sm font-medium text-white mb-4">{t.name}</div>
            <div className="grid grid-cols-2 gap-y-2 text-xs">
              <div className="text-white/50">Role</div>
              <div className="text-right text-white">{t.role}</div>
            </div>
          </div>
        ))}
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
