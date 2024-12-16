import React from 'react';
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    year: '2024',
    title: "Bachelor's in Computer Systems Engineering",
    description: "Graduated with honors, specializing in software systems and architecture.",
  },
  {
    year: '2023',
    title: 'Software Developer Attachment - Lanstar Technologies',
    description: "Developed and maintained web applications using modern JavaScript frameworks.",
  },
  {
    year: '2024–Present',
    title: 'Freelance Software Developer',
    description: "Working on various projects including chatbot development and API integrations.",
  },
];

export default function JourneySection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          My Journey
        </h2>
        <div className="max-w-2xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}