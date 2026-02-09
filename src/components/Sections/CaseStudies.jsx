import { useBookForm } from '../../context/BookFormContext';

const mainStudies = [
  {
    tag: 'PRODUCTHQ',
    title: 'Product Management Platform',
    problem: 'Competing in a crowded market with no clear positioning. Struggling to cut through noise and reach decision-makers.',
    whatIdid: 'Conducted deep market research. Built ad creatives and campaigns with messaging that resonated with their specific ICP. Launched targeted campaigns across Meta.',
    stats: [
      { value: '438', label: 'Qualified Meetings' },
      { value: '-411%', label: 'Cost Per Call', highlight: true },
      { value: '$1.3M ARR', label: 'Added in 90 Days', big: true },
    ],
  },
  {
    tag: 'UPNOTIFY',
    title: 'Notification Infrastructure',
    problem: 'High CAC making paid acquisition unprofitable. Existing funnel wasn\'t converting cold traffic into demos.',
    whatIdid: 'Overhauled their entire paid advertising funnel. Scripted 40+ ad creatives. Built custom landing pages and backend nurture systems.',
    stats: [
      { value: '7.5x', label: 'Conversions' },
      { value: '-245%', label: 'Lower CAC', highlight: true },
      { value: '9x Demos', label: 'Booked in 60 Days', big: true },
    ],
  },
];

const smallStudies = [
  { tag: 'INSTANTLY AI', title: 'Cold Email Infrastructure', desc: 'Identified high-intent audience segments and crafted pain-point specific messaging.', result: '+$140K MRR', resultLabel: 'Revenue Added' },
  { tag: 'BOOKYOURDATA', title: 'B2B Contact Database', desc: 'Developed targeted messaging for specific personas and personalized funnel journeys.', result: '+$60K MRR', resultLabel: 'Revenue Added' },
];

export default function CaseStudies() {
  const { openForm } = useBookForm();
  return (
    <section id="case-studies" className="container mx-auto px-6 max-w-6xl mb-32">
      <div className="mb-16 md:text-center max-w-2xl mx-auto reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Real Results And ROI</h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {mainStudies.map((study) => (
          <div key={study.tag} className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 reveal relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100" />
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div>
                <div className="text-xs font-mono text-brand-primary mb-2">{study.tag}</div>
                <h3 className="text-2xl font-medium text-white mb-4">{study.title}</h3>
                <div className="space-y-4 text-sm text-white/60 font-light">
                  <p><strong className="text-white/80">Problem:</strong> {study.problem}</p>
                  <p><strong className="text-white/80">What I Did:</strong> {study.whatIdid}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white/5 rounded-2xl p-6 border border-white/5">
                <div className="grid grid-cols-2 gap-4">
                  {study.stats.map((s) => (
                    <div key={s.label} className={s.big ? 'col-span-2 pt-4 border-t border-white/10 mt-2' : ''}>
                      <div className={`${s.big ? 'text-4xl font-serif' : 'text-3xl font-medium'} ${s.highlight ? 'text-brand-primary' : 'text-white'} tracking-tight`}>
                        {s.value}
                      </div>
                      <div className="text-xs text-white/40 uppercase tracking-wide mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-6">
          {smallStudies.map((study) => (
            <div key={study.tag} className="glass-panel p-8 rounded-3xl reveal">
              <div className="text-xs font-mono text-brand-primary mb-2">{study.tag}</div>
              <h3 className="text-xl font-medium text-white mb-2">{study.title}</h3>
              <p className="text-sm text-white/50 mb-6 font-light">{study.desc}</p>
              <div className="text-3xl font-serif text-white tracking-tight">{study.result}</div>
              <div className="text-xs text-white/40 uppercase tracking-wide mt-1">{study.resultLabel}</div>
            </div>
          ))}
        </div>
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
        <p className="text-xs text-white/40 font-light mt-3">Get similar results—start with a free strategy call.</p>
      </div>
    </section>
  );
}
