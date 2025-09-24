'use client';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: "IntelX transformed our security posture. Their threat intelligence is second to none, giving us the visibility we needed to stay ahead of attackers.",
    author: "CISO, Fortune 500 Bank",
    logoId: "client-logo-1",
  },
  {
    quote: "The incident response team was phenomenal. They contained a major breach within hours and got us back online with minimal disruption. True professionals.",
    author: "IT Director, Manufacturing Firm",
    logoId: "client-logo-2",
  },
  {
    quote: "As a startup, we couldn't afford a full-time CISO. IntelX's vCISO service gave us executive-level expertise at a fraction of the cost. Highly recommended.",
    author: "CEO, HealthTech Startup",
    logoId: "client-logo-3",
  },
    {
    quote: "Their penetration testing report was the most thorough and actionable I've ever seen. They found critical vulnerabilities that others missed.",
    author: "Head of Security, E-commerce Platform",
    logoId: "client-logo-4",
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => {
           const logo = PlaceHolderImages.find((p) => p.id === testimonial.logoId);
           return (
          <CarouselItem key={index} className="md:basis-1/2">
            <div className="p-1">
              <Card className="h-full">
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  <p className="mt-4 font-bold text-accent">{testimonial.author}</p>
                   {logo && (
                    <div className="mt-6">
                        <Image 
                            src={logo.imageUrl}
                            alt={testimonial.author}
                            width={150}
                            height={50}
                            className="h-auto w-32 object-contain"
                            data-ai-hint={logo.imageHint}
                        />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        )})}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialCarousel;
