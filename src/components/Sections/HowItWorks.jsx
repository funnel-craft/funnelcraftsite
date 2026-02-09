const steps = [
  { num: '1', title: 'Research & Strategy', text: 'I gather your sales call transcripts, analyze your ICP, and craft messaging that resonates with in-market prospects.' },
  { num: '2', title: 'Offer & Funnel Build', text: 'I work with you to craft a compelling offer and build the entire funnel—landing page, VSL, thank you page, and booking flows.' },
  { num: '3', title: 'Ad Creative Production', text: 'I script, design, and guide production of your ad creatives. New variations are produced and tested every 72 hours.' },
  { num: '4', title: 'Campaign Launch & Testing', text: 'I launch campaigns and test 60+ creatives simultaneously. I typically find a profitable angle within 5-14 days.' },
  { num: '5', title: 'Optimization & Scale', text: 'I analyze performance, cut what\'s not working, and scale the winners to maximise ROAS and POAS.' },
];

export default function HowItWorks() {
  return (
    <section id="process" className="container mx-auto px-6 max-w-4xl mb-32">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">How It Works</h2>
      </div>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {steps.map((step) => (
          <div key={step.num} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0A0B10] shadow text-brand-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="font-mono text-sm font-bold">{step.num}</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/50 font-light">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
