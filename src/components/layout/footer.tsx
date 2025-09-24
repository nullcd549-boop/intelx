import Link from 'next/link';
import Logo from './logo';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
    // Using placeholders for social icons
  { name: 'Twitter', icon: 'T' },
  { name: 'LinkedIn', icon: 'L' },
  { name: 'GitHub', icon: 'G' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-auto text-primary" />
              <span className="text-xl font-bold">IntelX Secure</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              IntelX Cybersecurity Solutions. Protecting Your Digital Future Today.
            </p>
            <div className="mt-6 flex space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <Link href="#" aria-label={social.name}>
                    {/* Placeholder for actual SVG icon */}
                    <span className="font-bold">{social.icon}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                    <h4 className="font-semibold">Company</h4>
                    <ul className="mt-4 space-y-2">
                        {navLinks.slice(0, 3).map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold">Solutions</h4>
                     <ul className="mt-4 space-y-2">
                        {navLinks.slice(3).map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold">Legal</h4>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IntelX Cybersecurity Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
