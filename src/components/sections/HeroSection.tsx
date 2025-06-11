import React from 'react';
import GalaxyBackground from '@/components/GalaxyBackground';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      <GalaxyBackground />
      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-purple-400 to-pink-400 animate-subtle-pulse">
          CosmicFolio
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
          Embark on a journey through my universe of projects, skills, and coding adventures.
        </p>
        <div>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300" asChild>
            <a href="#projects">
              Explore My Galaxy
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
