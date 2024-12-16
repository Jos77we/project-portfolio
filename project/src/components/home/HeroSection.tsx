import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from '../footer/SocialLinks';

export default function HeroSection() {
  return (
    <div className="lg:w-1/2">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Crafting Intuitive Interfaces & Powerful Backends
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Hi, I'm Joseph Muigai, a full-stack developer specializing in MERN, SERN, and JARS stacks.
        I build scalable web applications that solve real-world problems.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          View Projects
          <ArrowRight className="ml-2" size={20} />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
        >
          Contact Me
        </Link>
      </div>
      <div className="mt-8">
        <SocialLinks />
      </div>
    </div>
  );
}