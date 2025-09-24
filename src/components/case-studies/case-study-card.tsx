'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ScrollReveal from '@/components/shared/scroll-reveal';

type CaseStudyCardProps = {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
};

const CaseStudyCard = ({ title, challenge, solution, outcome, image }: CaseStudyCardProps) => {
  const placeholder = PlaceHolderImages.find((p) => p.id === image);

  return (
    <ScrollReveal>
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
        {placeholder && (
          <div className="aspect-video overflow-hidden">
            <Image
              src={placeholder.imageUrl}
              alt={title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={placeholder.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl text-accent">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Challenge</h4>
              <p className="text-sm text-muted-foreground">{challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold">Solution</h4>
              <p className="text-sm text-muted-foreground">{solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Outcome</h4>
              <p className="text-sm text-muted-foreground">{outcome}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default CaseStudyCard;
