import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center">
          <SocialLinks />
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Joseph Muigai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}