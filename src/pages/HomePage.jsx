import Hero from '../components/Sections/Hero';
import VSLSection from '../components/Sections/VSLSection';
import CTABlock from '../components/Sections/CTABlock';
import LogoScroll from '../components/Sections/LogoScroll';
import WhySection from '../components/Sections/WhySection';
import CaseStudies from '../components/Sections/CaseStudies';
import HowItWorks from '../components/Sections/HowItWorks';
import Testimonials from '../components/Sections/Testimonials';
import WhatYouGet from '../components/Sections/WhatYouGet';
import MoreResults from '../components/Sections/MoreResults';
import WhoIWorkWith from '../components/Sections/WhoIWorkWith';
import FAQ from '../components/Sections/FAQ';
import FinalCTA from '../components/Sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <VSLSection />
      <CTABlock />
      <LogoScroll />
      <WhySection />
      <CaseStudies />
      <HowItWorks />
      <Testimonials />
      <WhatYouGet />
      <MoreResults />
      <WhoIWorkWith />
      <FAQ />
      <FinalCTA />
    </>
  );
}
