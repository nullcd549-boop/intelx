'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { submitDarkWebScan } from '@/lib/actions';
import { ScanLine } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  domain: z.string().min(3, { message: 'Please enter a valid domain.' }).refine(
    (value) => /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(value),
    "Please enter a valid domain (e.g., company.com)"
  ),
});

export default function DarkWebScanForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', domain: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitDarkWebScan(values);
    if (result.success) {
      toast({
        title: 'Scan Requested!',
        description: 'We have received your request. Your dark web scan report will be sent to your email.',
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
            Is Your Data on the Dark Web?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Enter your business email and domain for a free, confidential scan of compromised credentials.
        </p>
        <Card className="mx-auto mt-8 max-w-2xl text-left shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ScanLine className="text-accent"/>
                    Free Dark Web Scan
                </CardTitle>
                <CardDescription>Find out if your company's credentials are exposed.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input type="email" placeholder="Your business email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="domain"
                                render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input placeholder="yourcompany.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Scanning...' : 'Scan Now'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    </div>
  );
}
