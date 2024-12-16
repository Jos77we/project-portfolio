import React from 'react';
import { Circle } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ year, title, description, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex items-start group">
      <div className="flex flex-col items-center mr-4">
        <Circle className="w-4 h-4 text-blue-600" />
        {!isLast && (
          <div className="w-px h-full bg-blue-200 group-hover:bg-blue-400 transition-colors" />
        )}
      </div>
      <div className="pb-8">
        <span className="text-sm font-semibold text-blue-600">{year}</span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}