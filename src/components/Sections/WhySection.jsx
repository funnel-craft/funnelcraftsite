import { useBookForm } from '../../context/BookFormContext';

const cards = [
  {
    icon: 'lucide:target',
    title: 'I Specialise In Your Niche',
    text: 'I only work with coaches and course creators. That focus means I know exactly what works for your audience, your buyers, and your sales cycle—no generic playbooks.',
  },
  {
    icon: 'lucide:layers',
    title: 'Full-Funnel Ownership With You',
    text: "I don't just give advice. I work alongside you to build landing pages, script VSLs, set up tracking, design email flows, and optimize the entire funnel. You get one person in your corner.",
  },
  {
    icon: 'lucide:zap',
    title: 'Speed To Results',
    text: 'Most consultants take months to show results. I get your system live in 14 days with new creative testing every 72 hours. You see data faster, we optimize faster, you get results faster.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Guaranteed Results',
    text: "I've refined my process across 50+ clients. The same frameworks that have worked for thousands of launches get applied to your business from day one. I guarantee profitable results.",
  },
];

export default function WhySection() {
  const { openForm } = useBookForm();
  return (
    <section id="offer" className="container mx-auto px-6 max-w-6xl mb-32">
      <div className="mb-16 md:text-center max-w-2xl mx-auto reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Why Work With Me</h2>
        <p className="text-white/50 font-light leading-relaxed">
          I focus on one thing: getting you more high-value clients. No fluff, no generic advice—just a proven system that scales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`glass-panel p-8 rounded-3xl hover:border-brand-primary/30 transition-colors duration-300 reveal ${i >= 2 ? 'delay-100' : ''} ${i === 3 ? 'delay-200' : ''}`}
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-primary">
              <span className="iconify" data-icon={card.icon} data-width="20" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
            <p className="text-white/50 text-sm font-light leading-relaxed">{card.text}</p>
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
        <p className="text-xs text-white/40 font-light mt-3">Free 30-minute strategy call.</p>
      </div>
    </section>
  );
}
