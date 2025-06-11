import React from 'react';
import type { Skill } from '@/lib/types';
import { Star, Brain } from 'lucide-react'; // Assuming Brain as a default icon
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const SkillIcon = skill.icon || Brain;

  return (
    <Card className="bg-card/70 backdrop-blur-sm p-4 shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
      <CardContent className="p-0 flex flex-col items-center text-center space-y-3">
        <SkillIcon className="w-10 h-10 text-accent mb-2" />
        <h4 className="text-lg font-semibold font-headline text-foreground/90">{skill.name}</h4>
        <div className="flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < skill.proficiency ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
              />
            ))}
        </div>
        <Badge variant="secondary" className="text-xs bg-secondary/50 text-secondary-foreground">{skill.category}</Badge>
      </CardContent>
    </Card>
  );
};

export default SkillItem;
