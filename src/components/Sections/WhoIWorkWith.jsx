const TAGS = ['Coaches & Course Creators', 'Sales-led GTM Motion', '$500k+ Revenue', 'Product-market Fit', '$200+/day Ad Budget'];

const LOGOS = ['Instantly.ai', 'ListKit', 'TXTCART', 'Trustworthy', 'Growthspace', 'Buddy Punch', 'Float', 'Simplesat', 'Submagic', 'Promotix'];

export default function WhoIWorkWith() {
  return (
    <section className="container mx-auto px-6 max-w-4xl mb-32 text-center reveal">
      <h2 className="text-3xl font-serif text-white tracking-tight mb-8">Who I Work With</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {TAGS.map((tag) => (
          <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/80">
            {tag}
          </span>
        ))}
      </div>
      <div className="border-t border-white/5 pt-16">
        <p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em] mb-8">Join 50+ Coaches & Course Creators</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-50 grayscale">
          {LOGOS.map((name) => (
            <div key={name} className="flex items-center justify-center text-sm font-bold">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
