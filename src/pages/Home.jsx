import React from 'react';
import TopRibbon from '@/components/landing/TopRibbon';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import BenefitsSection from '@/components/landing/BenefitsSection';
import ProcessSection from '@/components/landing/ProcessSection';
import CalendarSection from '@/components/landing/CalendarSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopRibbon />
      <Header />
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <ProcessSection />
      <CalendarSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}