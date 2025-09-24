import PageHeader from '@/components/shared/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import FreeTools from '@/components/resources/free-tools';
import { Separator } from '@/components/ui/separator';

const blogPosts = [
  { title: 'The Rise of AI in Phishing Attacks', date: 'July 15, 2024', excerpt: 'Learn how attackers are leveraging AI and how you can defend against it.' },
  { title: 'Securing Your Remote Workforce: A 2024 Guide', date: 'July 8, 2024', excerpt: 'Best practices for keeping your distributed team secure.' },
  { title: 'Understanding the MITRE ATT&CK Framework', date: 'July 1, 2024', excerpt: 'A deep dive into the industry-standard knowledge base of adversary tactics.' },
];

const whitepapers = [
    { title: 'The 2024 Threat Landscape Report', description: 'An in-depth analysis of the year\'s most significant cyber threats.' },
    { title: 'Advanced Penetration Testing Methodologies', description: 'Beyond the basics: a guide for mature security programs.' }
]

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader
        title="Cybersecurity Resources"
        subtitle="Stay informed with our expert insights, free tools, and in-depth reports."
      />

      <div className="mt-12">
        <h2 className="text-3xl font-bold tracking-tighter text-primary">Free Security Tools</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Get a quick snapshot of your organization's exposure.
        </p>
        <div className="mt-8">
            <FreeTools />
        </div>
      </div>

        <Separator className="my-16" />

      <div className="mt-12 grid gap-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tighter text-primary">From Our Blog</h2>
           <div className="mt-8 space-y-8">
            {blogPosts.map((post, index) => (
                <Card key={index} className="glow-on-hover">
                    <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                        <h3 className="mt-2 text-xl font-semibold text-accent">{post.title}</h3>
                        <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
                        <Button variant="link" className="mt-4 px-0">Read More &rarr;</Button>
                    </CardContent>
                </Card>
            ))}
           </div>
        </div>
        <div>
           <h2 className="text-3xl font-bold tracking-tighter text-primary">Whitepapers</h2>
           <div className="mt-8 space-y-4">
            {whitepapers.map((paper, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle className="text-xl text-accent">{paper.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{paper.description}</p>
                        <Button className="mt-4 w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Button>
                    </CardContent>
                </Card>
            ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
