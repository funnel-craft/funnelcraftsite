import { useBookForm } from '../../context/BookFormContext';

const columns = [
  {
    title: 'Strategy & Research',
    icon: 'lucide:search',
    items: ['Sales call analysis & winning angles', 'ICP research & persona development', 'Competitor audit & differentiation', 'Messaging development', 'Offer structuring'],
  },
  {
    title: 'Funnel Build',
    icon: 'lucide:filter',
    items: ['Landing page copy & design', 'VSL scripting, editing & production', 'Booking system setup'],
  },
  {
    title: 'Ad Creatives',
    icon: 'lucide:image',
    items: ['Ad scripting & copywriting', 'Static, Video & Carousel ads', '50+ total ad angles'],
  },
  {
    title: 'Tracking & Attribution',
    icon: 'lucide:bar-chart-2',
    items: ['Meta Pixel & Server-side setup', 'Conversion event tracking', 'Performance dashboards'],
  },
  {
    title: 'Email & Sales',
    icon: 'lucide:mail',
    items: ['Nurture & Follow-up flows', 'Lead reactivation campaigns', 'CRM workflow optimization'],
  },
  {
    title: 'Ongoing',
    icon: 'lucide:refresh-cw',
    items: ['Creative testing & iteration', 'A/B testing across funnel', 'Weekly performance reporting'],
  },
];

export default function WhatYouGet() {
  const { openForm } = useBookForm();
  return (
    <section className="container mx-auto px-6 max-w-6xl mb-32">
      <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 reveal">
        <h2 className="text-3xl font-serif text-white tracking-tight mb-10 text-center">Everything You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {columns.map((col) => (
            <div key={col.title} className="space-y-8">
              <div>
                <h4 className="text-brand-primary font-medium mb-4 flex items-center gap-2">
                  <span className="iconify" data-icon={col.icon} data-width="16" /> {col.title}
                </h4>
                <ul className="space-y-2 text-sm text-white/60 font-light">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="iconify text-brand-primary mt-0.5" data-icon="lucide:check" data-width="14" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 pt-10 border-t border-white/10">
          <button
            type="button"
            onClick={openForm}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:brightness-110 transition-all duration-300 border border-white/20"
          >
            Book A Call
            <span className="iconify" data-icon="lucide:calendar" data-width="16" />
          </button>
          <p className="text-xs text-white/40 font-light mt-3">Ready to get all of this? Let&apos;s talk.</p>
        </div>
      </div>
    </section>
  );
}
