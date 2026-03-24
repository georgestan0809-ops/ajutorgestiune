import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  "Top products",
  "Weak products",
  "Estimated margin",
  "Anomalies",
  "Forecasts",
  "Daily owner brief",
];

export default function DashboardPage() {
  return (
    <AppShell
      title="Control Tower"
      description="Minimal application shell for the StorePilot MVP."
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Card key={card}>
            <CardHeader>
              <CardTitle className="text-base">{card}</CardTitle>
            </CardHeader>
            <CardContent>
              <EmptyState
                title="Not implemented"
                description="Business logic and widgets will be added in feature modules."
              />
            </CardContent>
          </Card>
        ))}
      </section>
    </AppShell>
  );
}
