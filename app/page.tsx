'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}