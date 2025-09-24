'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/shared/scroll-reveal';

type ServiceCardProps = {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ElementType;
};

const ServiceCard = ({ title, description, benefits, icon: Icon }: ServiceCardProps) => {
  return (
    <ScrollReveal>
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
        <CardHeader>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <h4 className="font-semibold">Key Benefits:</h4>
          <ul className="mt-4 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/contact">Request Proposal</Link>
          </Button>
        </CardFooter>
      </Card>
    </ScrollReveal>
  );
};

export default ServiceCard;
