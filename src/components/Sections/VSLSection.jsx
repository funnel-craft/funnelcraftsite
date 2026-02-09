import { useEffect, useState } from 'react';
import vslThumbnail from '../../assets/images/vsl-thumbnail.avif';

export default function VSLSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.iconify) {
      window.iconify?.scan?.();
    }
  }, []);

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
      <section className="container mx-auto px-4 max-w-4xl mb-24 reveal">
        <div className="relative group rounded-2xl bg-[#0A0B10] border border-brand-border p-2 shadow-2xl overflow-hidden">
          <div className="aspect-video w-full bg-brand-panel relative rounded-xl overflow-hidden flex items-center justify-center group-hover:border-brand-primary/20 transition-colors border border-transparent">
            <img src={vslThumbnail} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-panel to-[#050508] opacity-50" />
            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="w-20 h-20 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center backdrop-blur-sm z-10 group-hover:scale-110 transition-transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark"
              aria-label="Play video"
            >
              <span className="iconify text-brand-primary ml-1" data-icon="lucide:play" data-width="32" />
            </button>
            <div className="absolute bottom-6 left-6 z-10 text-xs font-mono text-white/50 bg-black/50 px-2 py-1 rounded border border-white/10">Video Placeholder</div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-emerald-700 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 -z-10" />
        </div>
      </section>

      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setShowVideoModal(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close"
          />
          <div className="relative w-full max-w-md rounded-2xl glass-panel border border-white/10 shadow-2xl modal-in p-8">
            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close"
            >
              <span className="iconify" data-icon="lucide:x" data-width="20" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center mb-4">
                <span className="iconify text-brand-primary" data-icon="lucide:video" data-width="28" />
              </div>
              <h3 className="text-xl font-serif text-white tracking-tight mb-2">VSL Video</h3>
              <p className="text-white/60 text-sm font-light">
                On your real site, your VSL video will play here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
