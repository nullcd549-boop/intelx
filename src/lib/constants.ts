import { ShieldCheck, Search, Zap, Building, UserCheck, Server, Shield, Network } from 'lucide-react';

export const services = [
  {
    title: 'Penetration Testing & Red Teaming',
    description: 'Simulate real-world attacks to identify and remediate vulnerabilities before attackers do.',
    benefits: [
      'Discover critical security flaws.',
      'Validate your defense capabilities.',
      'Meet compliance requirements (PCI, HIPAA).',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Threat Intelligence & Hunting',
    description: 'Proactively search for hidden threats within your network using cutting-edge intelligence.',
    benefits: [
      'Identify compromised systems faster.',
      'Understand adversary tactics.',
      'Reduce attacker dwell time.',
    ],
    icon: Search,
  },
  {
    title: 'Incident Response & Forensics',
    description: 'Rapidly respond to and recover from security incidents to minimize damage and downtime.',
    benefits: [
      '24/7 expert response team.',
      'Contain and eradicate threats quickly.',
      'Preserve evidence for legal action.',
    ],
    icon: Zap,
  },
  {
    title: 'Managed Security Services (MSSP)',
    description: 'Our security operations center (SOC) becomes an extension of your team, 24/7.',
    benefits: [
      'Continuous monitoring and detection.',
      'Access to elite security experts.',
      'Reduce operational overhead.',
    ],
    icon: Building,
  },
  {
    title: 'vCISO & Governance',
    description: 'Get executive-level security leadership and strategic guidance without the full-time cost.',
    benefits: [
      'Develop a strategic security roadmap.',
      'Manage risk and ensure compliance.',
      'Align security with business goals.',
    ],
    icon: UserCheck,
  },
  {
    title: 'Cloud & Infrastructure Security',
    description: 'Secure your AWS, Azure, and GCP environments against misconfigurations and threats.',
    benefits: [
      'Audit and harden cloud configurations.',
      'Implement cloud-native security controls.',
      'Ensure continuous compliance.',
    ],
    icon: Server,
  },
  {
    title: 'Attack Surface Management',
    description: 'Discover and monitor all your internet-facing assets to eliminate unknown risks.',
     benefits: [
      'Gain complete visibility of your external assets.',
      'Identify and prioritize exposed vulnerabilities.',
      'Continuously monitor for changes and new risks.',
    ],
    icon: Network,
  },
    {
    title: 'Brand Protection',
    description: 'Detect and takedown phishing sites, fake social media profiles, and brand impersonations.',
    benefits: [
      'Protect your customers from fraud.',
      'Preserve your brand reputation.',
      'Disrupt attacker infrastructure.',
    ],
    icon: Shield,
  },
];
