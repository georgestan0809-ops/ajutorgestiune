import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TenantsPage() {
  return (
    <AppShell
      title="Tenants"
      description="Tenant administration surface reserved for future implementation."
    >
      <Card>
        <CardHeader>
          <CardTitle>Tenant management</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Not implemented"
            description="Tenant provisioning, member management, and access controls will be added here."
          />
        </CardContent>
      </Card>
    </AppShell>
  );
}
