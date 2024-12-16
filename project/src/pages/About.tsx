import React from 'react';
import IntroSection from '../components/about/IntroSection';
import SkillsSection from '../components/about/SkillsSection';
import ValuesSection from '../components/about/ValuesSection';
import JourneySection from '../components/about/JourneySection';
import FunFactsSection from '../components/about/FunFactsSection';

export default function About() {
  return (
    <div className="min-h-screen">
      <IntroSection />
      <SkillsSection />
      <ValuesSection />
      <JourneySection />
      <FunFactsSection />
    </div>
  );
}