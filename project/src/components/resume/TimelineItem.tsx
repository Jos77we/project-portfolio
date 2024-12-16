import React from 'react';
import { Circle } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  company,
  period,
  description,
  achievements,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative flex">
      <div className="flex flex-col items-center mr-4">
        <Circle className="w-4 h-4 text-blue-600" />
        {!isLast && (
          <div className="w-px h-full bg-gray-200" />
        )}
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-blue-600 font-medium">{company}</p>
        <p className="text-sm text-gray-500 mb-4">{period}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}