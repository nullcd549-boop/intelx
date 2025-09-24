import Hero from '@/components/home/hero';
import FeatureStrip from '@/components/home/feature-strip';
import PricingTeaser from '@/components/home/pricing-teaser';
import DarkWebScanForm from '@/components/home/dark-web-scan-form';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="space-y-16 sm:space-y-24">
          <FeatureStrip />
          <Separator />
          <PricingTeaser />
          <Separator />
          <DarkWebScanForm />
        </div>
      </div>
    </div>
  );
}
