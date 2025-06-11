
import React, { useState, useEffect } from 'react';
import type { Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const [clientAnimationDelay, setClientAnimationDelay] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Apply the animationDelay only on the client side after hydration
    setClientAnimationDelay(project.animationDelay);
  }, [project.animationDelay]);

  return (
    <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      <CardHeader className="items-center text-center">
        <div
          className={`w-24 h-24 md:w-32 md:h-32 rounded-full ${project.planetColor} shadow-lg mb-4 animate-float flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
          style={clientAnimationDelay ? { animationDelay: clientAnimationDelay } : undefined}
        >
           {/* Optional: Add a simple pattern or icon inside the planet */}
        </div>
        <CardTitle className="text-2xl font-headline text-accent">{project.name}</CardTitle>
        <CardDescription className="text-foreground/70 h-12 overflow-hidden text-ellipsis">
          {project.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-center">
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors" onClick={() => onViewDetails(project)}>
          <Eye className="mr-2 h-4 w-4" /> View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
