import React from 'react';
import TimelineItem from './TimelineItem';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Lanstar Technologies',
    period: 'April 2023 - September 2023',
    description: 'Implemented RESTful APIs and streamlined server-client communication for seamless functionality.',
    achievements: [
      'Developed and maintained web applications using modern JavaScript frameworks',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
      'Improved application performance by 40% through code optimization',
    ],
  },
  {
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2024 - Present',
    description: 'Developed a Twilio-integrated chatbot to automate customer support and payment inquiries.',
    achievements: [
      'Built and deployed full-stack applications for various clients',
      'Managed project timelines and client communications effectively',
      'Implemented automated testing strategies for quality assurance',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            {...experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}