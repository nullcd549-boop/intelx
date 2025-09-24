import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const tiers = [
  { name: 'Personal', price: 79, description: 'For individuals', feature: 'Dark Web Monitoring' },
  { name: 'SMB', price: 800, description: 'For small businesses', feature: '24/7 Threat Monitoring' },
  { name: 'Enterprise', price: 4000, description: 'For large organizations', feature: 'Dedicated Threat Analyst' },
];

export default function PricingTeaser() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
        Clear Pricing, Powerful Protection
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
        Choose a plan that scales with your needs. Get enterprise-grade security at any size.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="text-accent">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold">
                ${tier.price}
                <span className="text-lg font-normal text-muted-foreground">/mo</span>
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Starts from</p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>{tier.feature}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/pricing">View Plan</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
       <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/pricing">See All Features & Pricing</Link>
            </Button>
        </div>
    </div>
  );
}
