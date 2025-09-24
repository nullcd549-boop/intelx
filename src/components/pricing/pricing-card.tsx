'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '../shared/scroll-reveal';

type PricingCardProps = {
  name: string;
  price: number;
  pricePeriod: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const PricingCard = ({ name, price, pricePeriod, description, features, cta, highlight = false }: PricingCardProps) => {
  return (
    <ScrollReveal>
      <Card
        className={cn(
          'flex h-full flex-col',
          highlight && 'border-accent shadow-lg shadow-accent/20'
        )}
      >
        {highlight && (
          <div className="rounded-t-lg bg-accent px-4 py-1.5 text-center text-sm font-semibold text-accent-foreground">
            Most Popular
          </div>
        )}
        <CardHeader className="items-center text-center">
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col items-center">
          <div className="text-center">
            <span className="text-4xl font-extrabold tracking-tighter">
              ${price}
            </span>
            <span className="text-muted-foreground">/ {pricePeriod}</span>
            <p className='text-xs text-muted-foreground mt-1'>starting from</p>
          </div>
          <ul className="mt-8 w-full space-y-3 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full" variant={highlight ? 'default' : 'outline'}>
            <Link href="/contact">{cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    </ScrollReveal>
  );
};

export default PricingCard;
