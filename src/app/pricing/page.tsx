import PageHeader from '@/components/shared/page-header';
import PricingCard from '@/components/pricing/pricing-card';
import { CheckCircle } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Personal',
    price: 79,
    pricePeriod: 'month',
    description: 'Essential protection for individuals and freelancers.',
    features: [
      'Dark Web Monitoring',
      'Account Exposure Checks',
      'Basic Phishing Protection',
      'Monthly Security Report',
    ],
    cta: 'Get Started',
  },
  {
    name: 'SMB',
    price: 800,
    pricePeriod: 'month',
    description: 'Comprehensive security for small and medium businesses.',
    features: [
      'All Personal Features',
      'Attack Surface Management',
      '24/7 Threat Monitoring',
      'Incident Response Support',
      'vCISO Consultation (2 hrs/mo)',
    ],
    cta: 'Request Proposal',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 4000,
    pricePeriod: 'month',
    description: 'Custom, scalable solutions for large organizations.',
    features: [
      'All SMB Features',
      'Dedicated Threat Intel Analyst',
      'Red Teaming & PenTesting',
      'Supply Chain Intelligence',
      'Custom Integrations & API',
    ],
    cta: 'Contact Sales',
  },
];

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Flexible Pricing for Every Need"
        subtitle="Transparent, scalable, and powerful cybersecurity solutions. Choose the plan that's right for you."
      />
      <div className="mt-12 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} {...tier} />
        ))}
      </div>

       <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold tracking-tighter">All Plans Include</h3>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-4 text-left sm:grid-cols-3">
            <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-muted-foreground">Expert Support</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-muted-foreground">Real-time Alerts</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-muted-foreground">Secure Dashboard</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-muted-foreground">Actionable Insights</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-muted-foreground">Compliance Tools</span>
            </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-muted-foreground">Regular Updates</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
