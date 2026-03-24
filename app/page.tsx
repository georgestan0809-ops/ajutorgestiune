import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const platformPillars = [
  "Tenant-aware data access",
  "Connectors and ingestion jobs",
  "Analytics services",
  "Owner brief delivery",
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="container flex min-h-screen flex-col justify-center py-16">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex rounded-full border bg-white/80 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
            SaaS MVP scaffold
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              AjutorGestiune
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Production-ready foundation for a multi-tenant retail control tower.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformPillars.map((pillar) => (
              <Card key={pillar} className="border-white/70 bg-white/80 shadow-sm backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-base">{pillar}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="max-w-xl border-dashed bg-white/70">
            <CardHeader>
              <CardTitle>App shell</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                The dashboard, service layer, and database primitives are scaffolded and ready for feature work.
              </p>
              <Button asChild>
                <Link href="/dashboard">Open dashboard shell</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
