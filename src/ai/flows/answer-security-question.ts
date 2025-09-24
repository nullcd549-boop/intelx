'use server';

/**
 * @fileOverview This flow answers a security question using information from a website.
 *
 * - answerSecurityQuestion - A function that answers a security question.
 * - AnswerSecurityQuestionInput - The input type for the answerSecurityQuestion function.
 * - AnswerSecurityQuestionOutput - The return type for the answerSecurityQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerSecurityQuestionInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The content of the website to use as context.'),
  question: z.string().describe('The security question to answer.'),
});
export type AnswerSecurityQuestionInput = z.infer<typeof AnswerSecurityQuestionInputSchema>;

const AnswerSecurityQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the security question.'),
});
export type AnswerSecurityQuestionOutput = z.infer<typeof AnswerSecurityQuestionOutputSchema>;

export async function answerSecurityQuestion(
  input: AnswerSecurityQuestionInput
): Promise<AnswerSecurityQuestionOutput> {
  return answerSecurityQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerSecurityQuestionPrompt',
  input: {schema: AnswerSecurityQuestionInputSchema},
  output: {schema: AnswerSecurityQuestionOutputSchema},
  prompt: `You are a cybersecurity expert. Answer the following security question using only the information provided from the website content.

Website Content: {{{websiteContent}}}

Question: {{{question}}}

Answer:`,
});

const answerSecurityQuestionFlow = ai.defineFlow(
  {
    name: 'answerSecurityQuestionFlow',
    inputSchema: AnswerSecurityQuestionInputSchema,
    outputSchema: AnswerSecurityQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
