import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ContactSection from '@/components/sections/ContactSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold font-headline text-accent hover:opacity-80 transition-opacity">
            CosmicFolio
          </a>
          <div className="space-x-4 md:space-x-6">
            <a href="#projects" className="text-foreground/80 hover:text-accent transition-colors font-medium">Projects</a>
            <a href="#skills" className="text-foreground/80 hover:text-accent transition-colors font-medium">Skills</a>
            <a href="#timeline" className="text-foreground/80 hover:text-accent transition-colors font-medium">Journey</a>
            <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors font-medium">Contact</a>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <Separator className="my-0 bg-border/50" />
        <SkillsSection />
        <Separator className="my-0 bg-border/50" />
        <TimelineSection />
        <Separator className="my-0 bg-border/50" />
        <ContactSection />
      </main>

      <footer className="py-8 bg-primary text-primary-foreground/70 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} CosmicFolio. All rights reserved.</p>
          <p className="text-sm mt-1">Crafted with pixels and passion in the digital universe.</p>
        </div>
      </footer>
    </div>
  );
}
