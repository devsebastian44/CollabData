'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export function ContactForm() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please fill out all fields.',
      });
      return;
    }
    console.log({ name, email, message });
    toast({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. We will get back to you soon.',
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="bg-white dark:bg-surface-dark border-slate-200 dark:border-border-dark shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">Contact Us</CardTitle>
            <CardDescription>Have a question or want to learn more? Drop us a line.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button type="submit" className="w-full h-11 font-bold">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
