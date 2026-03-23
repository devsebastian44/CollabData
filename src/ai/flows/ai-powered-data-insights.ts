'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing AI-powered data insights.
 *
 * It suggests relevant EDA analyses based on the dataset's content, datatypes, and identified patterns.
 * The flow takes a dataset description as input and returns analysis suggestions.
 *
 * @interface AIPoweredDataInsightsInput - Defines the input schema for the flow, including a dataset description.
 * @interface AIPoweredDataInsightsOutput - Defines the output schema for the flow, including a list of analysis suggestions.
 * @function getAIPoweredDataInsights - An async function that wraps the AIPoweredDataInsightsFlow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIPoweredDataInsightsInputSchema = z.object({
  datasetDescription: z
    .string()
    .describe(
      'A detailed description of the dataset, including column names, datatypes, and a summary of the data.'
    ),
});
export type AIPoweredDataInsightsInput = z.infer<
  typeof AIPoweredDataInsightsInputSchema
>;

const AIPoweredDataInsightsOutputSchema = z.object({
  analysisSuggestions: z
    .array(z.string())
    .describe('A list of suggested EDA analyses relevant to the dataset.'),
});
export type AIPoweredDataInsightsOutput = z.infer<
  typeof AIPoweredDataInsightsOutputSchema
>;

export async function getAIPoweredDataInsights(
  input: AIPoweredDataInsightsInput
): Promise<AIPoweredDataInsightsOutput> {
  return AIPoweredDataInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'AIPoweredDataInsightsPrompt',
  input: { schema: AIPoweredDataInsightsInputSchema },
  output: { schema: AIPoweredDataInsightsOutputSchema },
  prompt: `You are an AI assistant that provides smart suggestions for Exploratory Data Analysis (EDA).
  Based on the following dataset description, suggest a list of relevant EDA analyses that would be useful for understanding the data.
  Consider the datatypes, potential relationships between columns, and overall patterns in the data.
  Return analysis suggestions in a string array format.

  Dataset Description: {{{datasetDescription}}}

  Analysis Suggestions:`,
});

const AIPoweredDataInsightsFlow = ai.defineFlow(
  {
    name: 'AIPoweredDataInsightsFlow',
    inputSchema: AIPoweredDataInsightsInputSchema,
    outputSchema: AIPoweredDataInsightsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
