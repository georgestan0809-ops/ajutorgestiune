import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuditPage() {
  return (
    <AppShell
      title="Audit"
      description="Audit visibility surface reserved for future implementation."
    >
      <Card>
        <CardHeader>
          <CardTitle>Audit log</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Not implemented"
            description="Tenant-scoped audit history and filtering will be added here."
          />
        </CardContent>
      </Card>
    </AppShell>
  );
}
