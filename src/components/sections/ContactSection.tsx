import React from 'react';
import ContactForm from '@/components/ContactForm';
import { socialLinksData } from '@/lib/data';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background w-full">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            Connect Across the Cosmos
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Have a question, a project idea, or just want to say hi? Send a signal my way!
          </p>
        </header>
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground/90">Or find me on other platforms:</h3>
          <div className="flex justify-center gap-6">
            {socialLinksData.map((link) => (
              <Button key={link.id} variant="outline" size="icon" className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 w-12 h-12" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
