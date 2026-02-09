import { useBookForm } from '../../context/BookFormContext';

export default function CTABlock() {
  const { openForm } = useBookForm();

  return (
    <section className="container mx-auto px-6 text-center mb-24 reveal" id="book-cta">
      <button
        type="button"
        onClick={openForm}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:shadow-xl hover:brightness-110 transition-all duration-300 border border-white/20 mb-3"
      >
        Book A Call
        <span className="iconify" data-icon="lucide:calendar" data-width="16" />
      </button>
      <p className="text-xs text-white/40 font-light">Free 30-minute strategy call. No obligation.</p>
    </section>
  );
}
