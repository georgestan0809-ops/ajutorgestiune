import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConnectorsPage() {
  return (
    <AppShell
      title="Connectors"
      description="Connector management surface reserved for future implementation."
    >
      <Card>
        <CardHeader>
          <CardTitle>Connector registry</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Not implemented"
            description="Connector setup, credentials, and sync status will be added here."
          />
        </CardContent>
      </Card>
    </AppShell>
  );
}
