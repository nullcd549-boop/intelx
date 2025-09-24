import PageHeader from '@/components/shared/page-header';
import ContactForm from '@/components/contact/contact-form';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Get in Touch"
        subtitle="We're here to help. Reach out to us for a consultation or any inquiries."
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tighter">Send us a message</h2>
            <ContactForm />
          </Card>
        </div>
        <div className="space-y-8 lg:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Our Office</h3>
                <p className="text-muted-foreground">24 Mirage City, Cairo, Egypt</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+20 11558107744</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">info@intelxgrp.com</p>
              </div>
            </div>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.912361021495!2d31.42512631511425!3d30.01079398189445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cdcf039c323%3A0x8e83c276b9231631!2sMirage%20City!5e0!3m2!1sen!2seg!4v1676395964811!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps view of IntelX Secure office"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
