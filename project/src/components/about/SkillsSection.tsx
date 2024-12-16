import React from 'react';
import SkillBar from './SkillBar';

const skillsData = {
  frontend: [
    { name: 'ReactJS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'TypeScript', percentage: 80 },
  ],
  backend: [
    { name: 'Node.js', percentage: 85 },
    { name: 'Express', percentage: 85 },
    { name: 'PostgreSQL', percentage: 80 },
    { name: 'MongoDB', percentage: 85 },
  ],
  other: [
    { name: 'Git', percentage: 85 },
    { name: 'Testing (Jest)', percentage: 80 },
    { name: 'RESTful APIs', percentage: 90 },
    { name: 'System Design', percentage: 75 },
  ],
};

export default function SkillsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Frontend Development</h3>
            {skillsData.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Backend Development</h3>
            {skillsData.backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Other Skills</h3>
            {skillsData.other.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}