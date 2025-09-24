'use server';

/**
 * @fileOverview Generates a threat intelligence report from raw data using GenAI.
 *
 * - generateThreatReport - A function that generates a threat intelligence report.
 * - GenerateThreatReportInput - The input type for the generateThreatReport function.
 * - GenerateThreatReportOutput - The return type for the generateThreatReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThreatReportInputSchema = z.object({
  rawData: z
    .string()
    .describe('The raw data to generate the threat intelligence report from.'),
});
export type GenerateThreatReportInput = z.infer<typeof GenerateThreatReportInputSchema>;

const GenerateThreatReportOutputSchema = z.object({
  report: z.string().describe('The generated threat intelligence report.'),
});
export type GenerateThreatReportOutput = z.infer<typeof GenerateThreatReportOutputSchema>;

export async function generateThreatReport(input: GenerateThreatReportInput): Promise<GenerateThreatReportOutput> {
  return generateThreatReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThreatReportPrompt',
  input: {schema: GenerateThreatReportInputSchema},
  output: {schema: GenerateThreatReportOutputSchema},
  prompt: `You are an expert cybersecurity threat analyst.

You will generate a comprehensive threat intelligence report based on the raw data provided. Identify key patterns, potential risks, and actionable insights.

Raw Data: {{{rawData}}}`,
});

const generateThreatReportFlow = ai.defineFlow(
  {
    name: 'generateThreatReportFlow',
    inputSchema: GenerateThreatReportInputSchema,
    outputSchema: GenerateThreatReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
