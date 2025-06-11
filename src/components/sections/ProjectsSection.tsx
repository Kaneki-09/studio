"use client";

import React, { useState } from 'react';
import { projectsData } from '@/lib/data';
import type { Project } from '@/lib/types';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Button } from '@/components/ui/button';
import { Telescope } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing project to allow modal to animate out
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-background/70 backdrop-blur-md w-full">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            My Constellation of Projects
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Explore the celestial bodies I've crafted. Each one a unique world of code and creativity.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={handleViewDetails} />
          ))}
        </div>
        
        {projectsData.length === 0 && (
          <div className="text-center py-12">
            <Telescope className="mx-auto h-16 w-16 text-accent mb-4" />
            <p className="text-xl text-foreground/70">Searching the cosmos for projects... Looks like this galaxy is still forming!</p>
            <p className="text-md text-foreground/60 mt-2">New creations will appear here soon.</p>
          </div>
        )}

        {selectedProject && (
          <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
