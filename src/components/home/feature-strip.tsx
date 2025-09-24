import { ShieldCheck, Search, Zap, Building, UserCheck, Server } from 'lucide-react';
import { services } from '@/lib/constants';
import Link from 'next/link';

const iconMap: { [key: string]: React.ElementType } = {
  'Penetration Testing & Red Teaming': ShieldCheck,
  'Threat Intelligence & Hunting': Search,
  'Incident Response & Forensics': Zap,
  'Managed Security Services (MSSP)': Building,
  'vCISO & Governance': UserCheck,
  'Cloud & Infrastructure Security': Server,
};


export default function FeatureStrip() {
  const featuredServices = services.slice(0, 5);
  
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
        Proactive, Intelligence-Driven Security
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
        We offer a full spectrum of services to identify vulnerabilities, hunt for threats, and respond to incidents with speed and precision.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-4 text-center md:grid-cols-3 lg:grid-cols-5">
        {featuredServices.map((service) => {
          const Icon = iconMap[service.title] || ShieldCheck;
          return (
            <Link href="/services" key={service.title} className="group rounded-lg border bg-card p-4 transition-all duration-300 hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10">
              <div className="flex justify-center">
                <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-accent">
                  <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-accent-foreground" />
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-card-foreground">{service.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
