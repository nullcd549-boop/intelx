'use server';

import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

const darkWebScanSchema = z.object({
  email: z.string().email(),
  domain: z.string().min(3),
});

type FormState = {
  success: boolean;
  message?: string;
};

// Simulate saving to Firestore and sending email.
// In a real app, this would interact with Firebase Admin SDK.
async function simulateDatabaseWrite(collection: string, data: any) {
  console.log(`Writing to collection '${collection}':`, data);
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true };
}


export async function submitContactForm(data: unknown): Promise<FormState> {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  try {
    await simulateDatabaseWrite('contacts', parsed.data);
    // Here you would also trigger an email notification (e.g., using Resend, SendGrid)
    return { success: true };
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return { success: false, message: 'Server error. Please try again later.' };
  }
}

export async function submitDarkWebScan(data: unknown): Promise<FormState> {
  const parsed = darkWebScanSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  try {
    await simulateDatabaseWrite('darkWebScans', parsed.data);
    // Trigger the scan and email report
    return { success: true };
  } catch (error) {
    console.error('Failed to submit dark web scan request:', error);
    return { success: false, message: 'Server error. Please try again later.' };
  }
}
