import React from 'react';
import { FileDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const handleDownload = () => {
    // TODO: Implement resume download
    console.log('Downloading resume...');
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-4">Joseph Muigai</h1>
        <p className="text-xl text-blue-100 mb-6">
          Software Developer | Full-Stack Specialist | Tech Enthusiast
        </p>
        <p className="max-w-2xl text-blue-100 mb-8">
          Passionate about creating innovative solutions that transform ideas into impactful digital products.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <FileDown className="w-5 h-5 mr-2" />
            Download Resume
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}