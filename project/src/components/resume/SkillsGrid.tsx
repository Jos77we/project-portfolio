import React from 'react';
import SkillBar from './SkillBar';

const skills = {
  languages: [
    { name: 'JavaScript', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'SQL', percentage: 85 },
  ],
  frameworks: [
    { name: 'React', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Express', percentage: 85 },
    { name: 'Next.js', percentage: 80 },
  ],
  tools: [
    { name: 'Git', percentage: 85 },
    { name: 'Jest', percentage: 80 },
    { name: 'Docker', percentage: 75 },
    { name: 'AWS', percentage: 70 },
  ],
};

export default function SkillsGrid() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
          {skills.languages.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Frameworks</h3>
          {skills.frameworks.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools</h3>
          {skills.tools.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}