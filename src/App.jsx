import React from 'react';
import HeroSpline from './components/HeroSpline';
import ValueProps from './components/ValueProps';
import QuickActions from './components/QuickActions';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B0F1A] text-white">
      <div className="mx-auto max-w-7xl space-y-6 py-8">
        <HeroSpline />
        <ValueProps />
        <QuickActions />
        <FooterCTA />
      </div>
    </div>
  );
}
