import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import HeroSection from '../components/home/HeroSection';
import ProfileImage from '../components/home/ProfileImage';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <HeroSection />
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}