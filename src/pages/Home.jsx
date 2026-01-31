import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import BenefitsSection from '@/components/landing/BenefitsSection';
import ProcessSection from '@/components/landing/ProcessSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  // Replace this with your actual GHL calendar link
  const calendarLink = "https://your-ghl-calendar-link.com";

  return (
    <div className="min-h-screen bg-white">
      <HeroSection calendarLink={calendarLink} />
      <TrustBar />
      <BenefitsSection calendarLink={calendarLink} />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA calendarLink={calendarLink} />
      <Footer />
    </div>
  );
}