import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[500px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <img
              src={project.images[0].url}
              alt={project.images[0].alt}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1 text-sm bg-blue-900/50 text-blue-200 rounded-full"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gray-900 rounded-xl overflow-hidden shadow-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
            <ul className="list-disc list-inside text-gray-400 mb-6">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {link.type === 'demo' ? (
                      <ExternalLink className="w-4 h-4 mr-2" />
                    ) : (
                      <Github className="w-4 h-4 mr-2" />
                    )}
                    {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}