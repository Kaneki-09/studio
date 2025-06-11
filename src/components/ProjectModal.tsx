"use client";

import React from 'react';
import type { Project } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] bg-card border-border shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline text-accent">{project.name}</DialogTitle>
          <DialogDescription className="text-foreground/80">{project.shortDescription}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={project.imageUrl} 
              alt={project.name} 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint={project.imageHint}
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground/90">About this project:</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground/90">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary/70 text-secondary-foreground hover:bg-secondary transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            {project.liveLink && (
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
            {project.repoLink && (
              <Button variant="outline" className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground" asChild>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
