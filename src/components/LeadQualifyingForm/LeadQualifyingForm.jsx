import { useState, useEffect } from 'react';
import { useBookForm } from '../../context/BookFormContext';

const STEPS = [
  { id: 'business', title: 'Your business' },
  { id: 'challenge', title: 'Biggest challenge' },
  { id: 'ads', title: 'Paid ads' },
  { id: 'details', title: 'Your details' },
  { id: 'schedule', title: 'Pick a time' },
];

const BUSINESS_OPTIONS = [
  { value: 'coach', label: 'Coach' },
  { value: 'course_creator', label: 'Course creator' },
  { value: 'both', label: 'Both' },
  { value: 'other', label: 'Other' },
];

const CHALLENGE_OPTIONS = [
  { value: 'lead_volume', label: 'Not enough qualified leads' },
  { value: 'conversion', label: 'Conversion rate too low' },
  { value: 'ad_costs', label: 'Ad costs too high' },
  { value: 'full_funnel', label: 'Need full funnel built' },
];

const ADS_OPTIONS = [
  { value: 'yes', label: 'Yes, running paid ads' },
  { value: 'no', label: 'No' },
  { value: 'planning', label: 'Planning to soon' },
];

function getNextSevenDays() {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push(d);
  }
  return days;
}

const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

export default function LeadQualifyingForm() {
  const { isOpen, closeForm } = useBookForm();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    business: '',
    challenge: '',
    ads: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    if (typeof window !== 'undefined' && window.iconify) window.iconify.scan();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') closeForm(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, step, closeForm]);

  const update = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

  const canProceed = () => {
    switch (step) {
      case 0: return !!formData.business;
      case 1: return !!formData.challenge;
      case 2: return !!formData.ads;
      case 3: return !!formData.name?.trim() && !!formData.email?.trim();
      case 4: return !!formData.date && !!formData.time;
      default: return false;
    }
  };

  const next = () => {
    if (step < STEPS.length - 1 && canProceed()) setStep((s) => s + 1);
    else if (step === STEPS.length - 1 && canProceed()) handleSubmit();
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    // In production: POST to your API / CRM
    console.log('Lead submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      closeForm();
      setStep(0);
      setFormData({ business: '', challenge: '', ads: '', name: '', email: '', phone: '', date: '', time: '' });
      setSubmitted(false);
    }, 2500);
  };

  if (!isOpen) return null;

  const days = getNextSevenDays();
  const formatDay = (d) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        onClick={closeForm}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close"
      />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[2rem] glass-panel border border-white/10 shadow-2xl shadow-brand-primary/5 modal-in">
        <div className="p-8 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-white tracking-tight">
              Book Your Strategy Call
            </h2>
            <button
              type="button"
              onClick={closeForm}
              className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close"
            >
              <span className="iconify" data-icon="lucide:x" data-width="20" />
            </button>
          </div>

          {/* Progress */}
          <div className="flex gap-1 mb-8">
            {STEPS.map((s, i) => (
              <div
                key={s.id}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= step ? 'bg-brand-primary' : 'bg-white/10'
                }`}
              />
            ))}
          </div>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="iconify text-brand-primary" data-icon="lucide:check" data-width="28" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">You&apos;re all set</h3>
              <p className="text-white/60 text-sm">We&apos;ll send a calendar invite to your email shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); next(); }} className="space-y-6">
              {/* Step 0: Business type */}
              {step === 0 && (
                <div className="reveal active">
                  <label className="block text-sm font-medium text-white/80 mb-3">What best describes you?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {BUSINESS_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('business', opt.value)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                          formData.business === opt.value
                            ? 'border-brand-primary bg-brand-primary/15 text-brand-primary'
                            : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: Challenge */}
              {step === 1 && (
                <div className="reveal active">
                  <label className="block text-sm font-medium text-white/80 mb-3">What&apos;s your biggest challenge right now?</label>
                  <div className="space-y-2">
                    {CHALLENGE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('challenge', opt.value)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all border ${
                          formData.challenge === opt.value
                            ? 'border-brand-primary bg-brand-primary/15 text-brand-primary'
                            : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Paid ads */}
              {step === 2 && (
                <div className="reveal active">
                  <label className="block text-sm font-medium text-white/80 mb-3">Are you currently running paid ads?</label>
                  <div className="space-y-2">
                    {ADS_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update('ads', opt.value)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                          formData.ads === opt.value
                            ? 'border-brand-primary bg-brand-primary/15 text-brand-primary'
                            : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Details */}
              {step === 3 && (
                <div className="reveal active space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Phone (optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Date & time */}
              {step === 4 && (
                <div className="reveal active space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">Preferred day</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {days.map((d) => (
                        <button
                          key={d.toISOString()}
                          type="button"
                          onClick={() => update('date', d.toISOString().slice(0, 10))}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all border ${
                            formData.date === d.toISOString().slice(0, 10)
                              ? 'border-brand-primary bg-brand-primary/15 text-brand-primary'
                              : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'
                          }`}
                        >
                          {formatDay(d)}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-3">Preferred time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => update('time', t)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all border ${
                            formData.time === t
                              ? 'border-brand-primary bg-brand-primary/15 text-brand-primary'
                              : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    className="px-5 py-3 rounded-full border border-white/10 text-white/80 hover:bg-white/5 transition-colors text-sm font-medium"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className="flex-1 bg-white text-brand-dark px-5 py-3 rounded-full text-sm font-semibold hover:bg-brand-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {step === STEPS.length - 1 ? 'Confirm & Book' : 'Continue'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
