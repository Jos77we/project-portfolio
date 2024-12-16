import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
      
      <div className="flex items-start">
        <div className="mr-4">
          <GraduationCap className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            BSc. Computer Systems Engineering
          </h3>
          <p className="text-blue-600">Kirinyaga University</p>
          <p className="text-sm text-gray-500 mb-4">2020 - 2024</p>
          <p className="text-gray-600">
            Coursework includes Web Development, Data Analytics, System Design, and Software Engineering principles.
            Graduated with honors and completed several practical projects applying theoretical knowledge to real-world scenarios.
          </p>
        </div>
      </div>
    </div>
  );
}