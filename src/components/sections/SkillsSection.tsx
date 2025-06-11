import React from 'react';
import { skillsData } from '@/lib/data';
import SkillItem from '@/components/SkillItem';
import { Zap } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

  return (
    <section id="skills" className="py-16 md:py-24 bg-background w-full">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            My Nebula of Skills
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            A spectrum of technologies and tools I use to navigate the digital cosmos.
          </p>
        </header>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold font-headline mb-6 text-accent flex items-center">
              <Zap className="w-6 h-6 mr-3 text-yellow-400" />
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <SkillItem key={skill.id} skill={skill} />
                ))}
            </div>
          </div>
        ))}
        
        {skillsData.length === 0 && (
           <div className="text-center py-12">
            <Zap className="mx-auto h-16 w-16 text-accent mb-4" />
            <p className="text-xl text-foreground/70">Skill matrix currently offline... Recalibrating!</p>
            <p className="text-md text-foreground/60 mt-2">Check back soon for an updated list of abilities.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
