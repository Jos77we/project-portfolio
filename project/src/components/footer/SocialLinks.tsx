import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 mb-4">
      <a
        href="https://github.com/yourusername"
        className="text-gray-600 hover:text-blue-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        className="text-gray-600 hover:text-blue-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="text-gray-600 hover:text-blue-600"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}