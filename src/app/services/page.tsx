import PageHeader from '@/components/shared/page-header';
import ServiceCard from '@/components/services/service-card';
import { services } from '@/lib/constants';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Our Cybersecurity Services"
        subtitle="A comprehensive suite of solutions to protect your organization from every angle."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
            icon={service.icon as any}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
