"use client";

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: "",
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Send Message
        </>
      )}
    </Button>
  );
}


const ContactForm: React.FC = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
          variant: "default",
        });
        formRef.current?.reset(); // Reset form on success
      } else if (state.errors && Object.keys(state.errors).length > 0) {
         toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-xl border border-border">
      <div>
        <Label htmlFor="name" className="text-foreground/80">Your Name</Label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="mt-1 bg-input border-border focus:ring-accent" 
          aria-describedby="name-error"
        />
        {state.errors?.name && <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="text-foreground/80">Your Email</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="mt-1 bg-input border-border focus:ring-accent"
          aria-describedby="email-error"
        />
        {state.errors?.email && <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground/80">Your Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          rows={5} 
          required 
          className="mt-1 bg-input border-border focus:ring-accent min-h-[120px]"
          aria-describedby="message-error"
        />
        {state.errors?.message && <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
      </div>
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
