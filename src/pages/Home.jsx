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
  // Lice Lifters Of Nassau County booking link
  const calendarLink = "https://app.liceliftersnassaucounty.com/widget/bookings/head-check-and-treatment";

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