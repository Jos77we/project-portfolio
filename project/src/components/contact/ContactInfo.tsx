import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'josemaina207@gmail.com',
    href: 'mailto:josemaina207@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+254 759 900 998',
    href: 'tel:+254759900998',
  },
];

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
];

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              {item.icon}
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-900">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}