import PageHeader from '@/components/shared/page-header';
import CaseStudyCard from '@/components/case-studies/case-study-card';
import TestimonialCarousel from '@/components/case-studies/testimonial-carousel';
import { Separator } from '@/components/ui/separator';

const caseStudies = [
  {
    id: '1',
    title: 'Defending a Global Financial Institution from APTs',
    challenge: 'A major bank faced persistent attacks from an advanced persistent threat (APT) group targeting sensitive customer data.',
    solution: 'IntelX deployed its Threat Intelligence platform to identify attacker TTPs, conducted red teaming to find vulnerabilities, and implemented a 24/7 managed detection and response service.',
    outcome: 'Successfully thwarted multiple intrusion attempts, secured critical assets, and improved the bank’s security posture by 75%.',
    image: 'case-study-1',
  },
  {
    id: '2',
    title: 'Securing a Healthcare Provider’s Cloud Infrastructure',
    challenge: 'A rapidly growing telehealth company needed to ensure its AWS environment was HIPAA compliant and secure from ransomware.',
    solution: 'Our cloud security experts performed a full audit, remediated misconfigurations, and established continuous monitoring and incident response protocols.',
    outcome: 'Achieved full HIPAA compliance, reduced cloud vulnerabilities by 90%, and prevented a potential multi-million dollar data breach.',
    image: 'case-study-2',
  },
  {
    id: '3',
    title: 'Incident Response for a Targeted Ransomware Attack',
    challenge: 'A manufacturing firm was hit by a sophisticated ransomware attack, halting all operations.',
    solution: 'The IntelX Incident Response team was deployed within an hour. We contained the breach, identified the entry point, and successfully restored operations from backups without paying the ransom.',
    outcome: 'Operations were restored in 48 hours, minimizing financial losses. Digital forensics provided key data to law enforcement.',
    image: 'case-study-3',
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Success Stories"
        subtitle="See how we've helped organizations like yours overcome their toughest security challenges."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} {...study} />
        ))}
      </div>

      <Separator className="my-16" />

      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-primary">What Our Clients Say</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Trust and results are the cornerstones of our partnerships.
        </p>
      </div>

      <div className="mt-12">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default CaseStudiesPage;
