const faqs = [
  {
    q: 'What makes you different from other consultants?',
    a: "I only work with coaches and course creators. That's it. Every framework and optimization I've learned comes from businesses like yours. I also work with you on the entire funnel—ads, landing pages, VSL, email flows—so you're not coordinating between five different vendors.",
  },
  {
    q: 'How long until I see results?',
    a: "I get your campaigns live within 14 days of kickoff. Most clients see their first booked demos within the first 7 days. Meaningful data usually comes by week 2-3. Full optimization and scaling typically happens over 6-8 weeks.",
  },
  {
    q: "What's the minimum ad spend required?",
    a: "I recommend a minimum of $200/day in ad spend. That gives us enough data to test creative angles, optimize campaigns, and scale what's working.",
  },
  {
    q: 'Do you handle creative production?',
    a: "I handle everything—scripting, design, editing. For video ads and VSLs, I'll need you or your team to film the talking head portions. I provide the scripts and shot lists.",
  },
  {
    q: "What if it doesn't work?",
    a: "My goal is to make you profitable within 90 days. I guarantee results and offer a full refund if results are not met. If I've done my job and you've held up your end, you will see results.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-6 max-w-3xl mb-32">
      <h2 className="text-3xl font-serif text-white tracking-tight mb-10 text-center reveal">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.q} className="glass-panel rounded-2xl group reveal">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="text-sm font-medium text-white">{faq.q}</span>
              <span className="iconify transition-transform group-open:rotate-180 text-white/50" data-icon="lucide:chevron-down" />
            </summary>
            <div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed">{faq.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
