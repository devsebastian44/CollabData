import { MainHeader } from '@/components/layout/main-header';
import { MainFooter } from '@/components/layout/main-footer';
import { Hero } from '@/components/pages/landing/hero';
import { SocialProof } from '@/components/pages/landing/social-proof';
import { Features } from '@/components/pages/landing/features';
import { DeveloperSection } from '@/components/pages/landing/developer-section';
import { Cta } from '@/components/pages/landing/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Features />
        <DeveloperSection />
        <Cta />
      </main>
      <MainFooter />
    </div>
  );
}
