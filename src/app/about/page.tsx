import Image from 'next/image';
import PageHeader from '@/components/shared/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamImage = PlaceHolderImages.find((img) => img.id === 'team-photo');

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="About IntelX Secure"
        subtitle="Your Trusted Partner in Cybersecurity"
      />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To safeguard the digital world by providing innovative, comprehensive, and accessible cybersecurity solutions that empower organizations to thrive in an increasingly connected landscape.
          </p>
        </div>
        {teamImage && (
          <div className="overflow-hidden rounded-lg">
            <Image
              src={teamImage.imageUrl}
              alt={teamImage.description}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={teamImage.imageHint}
            />
          </div>
        )}
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <Card className="glow-on-hover">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-accent">Our Vision</h3>
            <p className="mt-4 text-muted-foreground">
              To be the global leader in cyber intelligence, creating a secure digital future where businesses and individuals can operate with confidence and peace of mind.
            </p>
          </CardContent>
        </Card>
        <Card className="glow-on-hover">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-accent">Our Values</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Integrity: Upholding the highest ethical standards.</li>
              <li>Innovation: Continuously pushing the boundaries of technology.</li>
              <li>Excellence: Delivering unparalleled quality and service.</li>
              <li>Collaboration: Working together to achieve shared goals.</li>
            </ul>
          </CardContent>
        </Card>
         <Card className="relative overflow-hidden bg-card/50">
          <CardContent className="p-6">
             <div
              className="absolute inset-0 z-0 opacity-[0.03] "
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg fill='%23ffd700' fill-opacity='1'%3E%3Cpath d='M12 0h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12 6h-6v6h6V6zm-6 18h6v6h-6v-6zm18-12h-6v6h6v-6zM6 18h6v6H6v-6z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundPosition: 'center',
              }}
            ></div>
            <h3 className="text-2xl font-bold text-accent">Our Approach</h3>
            <p className="mt-4 text-muted-foreground">
              We blend cutting-edge AI with human expertise to provide a proactive, intelligence-driven approach to cybersecurity, staying one step ahead of emerging threats.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
