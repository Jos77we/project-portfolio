import React, { useState, useMemo } from 'react';
import { MessageSquare } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectGrid from '../components/projects/ProjectGrid';
import CallToAction from '../components/projects/CallToAction';
import SpinningGear from '../components/projects/SpinningGear';
import FeedbackModal from '../components/projects/FeedbackModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const categories = useMemo(() => {
    const projectCategories = ['all', ...new Set(projects.map((p) => p.category))];
    return projectCategories;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,1))] pointer-events-none" />
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SpinningGear />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            My Projects
          </h1>
          <p className="text-gray-400">
            Exploring the journey of innovation through technology. Here are some of the projects
            I've worked on that showcase my skills and passion for development.
          </p>
        </div>

        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <ProjectGrid projects={filteredProjects} />

        <div className="mt-12 text-center">
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors border border-blue-500/30"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Leave Feedback
          </button>
        </div>

        <CallToAction />

        <FeedbackModal
          isOpen={isFeedbackOpen}
          onClose={() => setIsFeedbackOpen(false)}
        />
      </div>
    </div>
  );
}