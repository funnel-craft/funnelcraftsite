export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020402] pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            <span className="font-serif text-lg tracking-tight text-white/95">
              <span className="text-brand-primary">Funnel</span>craft
            </span>
          </div>
          <p className="text-white/40 text-sm font-light">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
