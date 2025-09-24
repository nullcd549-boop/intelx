'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ParticleCanvas from './particle-canvas';
import Typewriter from './typewriter';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full">
      <ParticleCanvas />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 text-center">
        <div className="container px-4">
          <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Protecting Your Digital Future.
          </h1>
          <div className="mt-4 h-12 text-center text-xl font-medium text-accent sm:text-2xl md:h-14 md:text-3xl">
            <Typewriter words={['Today.', 'Always.', 'With Intelligence.']} />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            IntelX Cybersecurity Solutions provides elite cyber defense, threat intelligence, and incident response to secure your most critical assets.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="glow-on-hover">
              <Link href="/contact">Get Protected</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/resources">Request Free Scan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
