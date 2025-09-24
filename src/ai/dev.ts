import { config } from 'dotenv';
config();

import '@/ai/flows/generate-threat-report.ts';
import '@/ai/flows/answer-security-question.ts';
import '@/ai/flows/summarize-case-study.ts';