'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { submitDarkWebScan } from '@/lib/actions';

const scanSchema = z.object({
  target: z.string().min(3, { message: 'Please enter a valid target.' }),
});

const FreeTools = () => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof scanSchema>>({
        resolver: zodResolver(scanSchema),
        defaultValues: { target: '' },
    });
    
    async function onSubmit(values: z.infer<typeof scanSchema>, tool: string) {
        // Here we can use a single server action and pass the tool type
        const result = await submitDarkWebScan({ email: `scan@${values.target}`, domain: values.target });

        if (result.success) {
            toast({
                title: `${tool} Requested!`,
                description: `We are running the scan. Results will be sent to a generated report.`,
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
    <Tabs defaultValue="dark-web" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="dark-web">Dark Web Scan</TabsTrigger>
        <TabsTrigger value="exposure">Account Exposure</TabsTrigger>
        <TabsTrigger value="assessment">Threat Assessment</TabsTrigger>
      </TabsList>
      <TabsContent value="dark-web">
        <ToolForm form={form} onSubmit={(values) => onSubmit(values, 'Dark Web Scan')} placeholder="yourcompany.com" />
      </TabsContent>
      <TabsContent value="exposure">
        <ToolForm form={form} onSubmit={(values) => onSubmit(values, 'Account Exposure Check')} placeholder="employee@company.com" />
      </TabsContent>
      <TabsContent value="assessment">
        <ToolForm form={form} onSubmit={(values) => onSubmit(values, 'External Threat Assessment')} placeholder="yourcompany.com" />
      </TabsContent>
    </Tabs>
  );
};

// Reusable form component for different tools
function ToolForm({form, onSubmit, placeholder}: {form: any, onSubmit: (values: any) => void, placeholder: string}) {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 flex items-start gap-2">
                 <FormField
                    control={form.control}
                    name="target"
                    render={({ field }) => (
                    <FormItem className="flex-grow">
                        <FormControl>
                        <Input placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Scanning...' : 'Scan'}
                </Button>
            </form>
        </Form>
    )
}


export default FreeTools;
