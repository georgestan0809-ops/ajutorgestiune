import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";

const navigation: Array<{ href: Route; label: string }> = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tenants", label: "Tenants" },
  { href: "/connectors", label: "Connectors" },
  { href: "/audit", label: "Audit" },
];

type AppShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function AppShell({ title, description, children }: AppShellProps) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-[1440px] lg:grid-cols-[260px_1fr]">
        <aside className="border-r bg-white/80 px-6 py-8 backdrop-blur">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              AjutorGestiune
            </p>
            <h2 className="text-xl font-semibold">StorePilot shell</h2>
          </div>
          <Separator className="my-6" />
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="px-6 py-8 lg:px-10">
          <header className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
            {description ? (
              <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
            ) : null}
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
