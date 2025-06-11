import React from 'react';
import { timelineData } from '@/lib/data';
import TimelineItem from '@/components/TimelineItem';
import { Rocket } from 'lucide-react';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-background/70 backdrop-blur-md w-full">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            My Cosmic Journey
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Charting my course through the vast expanse of technology and learning.
          </p>
        </header>
        
        <div className="relative">
          {/* Optional: Add a rocket icon at the start or end of the timeline if desired */}
          {/* <Rocket className="absolute -top-8 left-1/2 -translate-x-1/2 h-12 w-12 text-accent transform rotate-45" /> */}
          
          {timelineData.length > 0 ? (
            timelineData.map((event, index) => (
              <TimelineItem key={event.id} event={event} isLast={index === timelineData.length - 1} />
            ))
          ) : (
            <div className="text-center py-12">
              <Rocket className="mx-auto h-16 w-16 text-accent mb-4" />
              <p className="text-xl text-foreground/70">Flight path under construction...</p>
              <p className="text-md text-foreground/60 mt-2">Timeline milestones will be plotted soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
