'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, RefreshCw, Check, AlertTriangle } from 'lucide-react';
import {
  getAIPoweredDataInsights,
  type AIPoweredDataInsightsOutput,
} from '@/ai/flows/ai-powered-data-insights';
import { Skeleton } from '@/components/ui/skeleton';

const MOCK_DATASET_DESCRIPTION = `
The dataset contains customer churn information for a telecom company.
Columns:
- customerID: string, unique identifier for each customer.
- gender: string, categorical ('Male', 'Female').
- SeniorCitizen: integer, boolean (0 or 1).
- Partner: string, boolean ('Yes', 'No').
- Dependents: string, boolean ('Yes', 'No').
- tenure: integer, months the customer has stayed with the company.
- PhoneService: string, boolean ('Yes', 'No').
- MultipleLines: string, ('Yes', 'No', 'No phone service').
- InternetService: string, ('DSL', 'Fiber optic', 'No').
- OnlineSecurity: string, ('Yes', 'No', 'No internet service').
- MonthlyCharges: float, the amount charged to the customer monthly.
- TotalCharges: float, the total amount charged to the customer.
- Churn: string, boolean ('Yes', 'No').
The dataset has 10,500 rows. There are some missing values in the 'TotalCharges' column.
`;

export function AIInsights() {
  const [insights, setInsights] = useState<AIPoweredDataInsightsOutput | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInsights = async () => {
    setLoading(true);
    setError(null);
    setInsights(null);
    try {
      const result = await getAIPoweredDataInsights({
        datasetDescription: MOCK_DATASET_DESCRIPTION,
      });
      setInsights(result);
    } catch (err) {
      setError('Failed to generate AI insights. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center p-4 text-center text-destructive">
          <AlertTriangle className="mb-2 h-8 w-8" />
          <p className="font-semibold">{error}</p>
        </div>
      );
    }

    if (insights && insights.analysisSuggestions.length > 0) {
      return (
        <ul className="space-y-3">
          {insights.analysisSuggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
              <span className="text-sm">{suggestion}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p className="text-center text-muted-foreground">
        No suggestions available at this time.
      </p>
    );
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="text-primary" />
          <CardTitle className="text-lg">AI-Powered Insights</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={fetchInsights}
          disabled={loading}
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  );
}
