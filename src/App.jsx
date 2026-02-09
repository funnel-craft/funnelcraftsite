import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import LeadQualifyingForm from './components/LeadQualifyingForm/LeadQualifyingForm';
import { BookFormProvider } from './context/BookFormContext';
import './App.css';

export default function App() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.iconify) {
      window.iconify?.scan?.();
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <BookFormProvider>
      <div className="relative min-h-screen selection:bg-brand-primary selection:text-brand-dark">
        <div className="fixed inset-0 pointer-events-none -z-10 bg-grid" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[600px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />
        <Navbar />
        <main className="pt-32 md:pt-40 pb-20">
          <HomePage />
        </main>
        <Footer />
        <LeadQualifyingForm />
      </div>
    </BookFormProvider>
  );
}
