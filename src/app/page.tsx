import { MainHeader } from '@/components/layout/main-header';
import { MainFooter } from '@/components/layout/main-footer';
import { Hero } from '@/components/pages/landing/hero';
import { SocialProof } from '@/components/pages/landing/social-proof';
import { Features } from '@/components/pages/landing/features';
import { Cta } from '@/components/pages/landing/cta';
import { ContactForm } from '@/components/pages/landing/contact-form';
import { DeveloperSection } from '@/components/pages/landing/developer-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <DeveloperSection />
        <Cta />
        <ContactForm />
      </main>
      <MainFooter />
    </div>
  );
}
