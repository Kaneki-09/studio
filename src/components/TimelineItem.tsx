import React from 'react';
import type { TimelineEvent } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Rocket } from 'lucide-react'; // Assuming Rocket as a default icon

interface TimelineItemProps {
  event: TimelineEvent;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast }) => {
  const EventIcon = event.icon || Rocket;

  return (
    <div className="relative pl-10 pb-8">
      {/* Timeline line */}
      {!isLast && <div className="absolute left-[18px] top-[22px] h-full w-0.5 bg-border"></div>}
      
      {/* Timeline point (icon) */}
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
        <EventIcon className="h-5 w-5" />
      </div>

      <Card className="ml-4 bg-card/70 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between mb-1">
            <CardTitle className="text-xl font-headline text-foreground/90">{event.title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-1.5 h-4 w-4" />
              {event.date}
            </div>
          </div>
          <CardDescription className="text-foreground/70">{event.description}</CardDescription>
        </CardHeader>
        {event.skillsAcquired && event.skillsAcquired.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {event.skillsAcquired.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default TimelineItem;
