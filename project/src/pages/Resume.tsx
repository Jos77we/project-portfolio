import React from 'react';
import HeroSection from '../components/resume/HeroSection';
import OverviewCard from '../components/resume/OverviewCard';
import SkillsGrid from '../components/resume/SkillsGrid';
import ExperienceTimeline from '../components/resume/ExperienceTimeline';
import EducationSection from '../components/resume/EducationSection';
import PortfolioShowcase from '../components/resume/PortfolioShowcase';
import ResumeCallToAction from '../components/resume/ResumeCallToAction';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <OverviewCard />
          </div>
          <div className="lg:col-span-2 space-y-12">
            <SkillsGrid />
            <ExperienceTimeline />
            <EducationSection />
          </div>
        </div>
        
        <PortfolioShowcase />
        <ResumeCallToAction />
      </div>
    </div>
  );
}