# AjutorGestiune

## Architecture

AjutorGestiune is scaffolded as a production-oriented SaaS MVP on top of Next.js App Router, TypeScript, Prisma, PostgreSQL, Tailwind, and shadcn/ui. The repository is intentionally minimal: it provides the structural boundaries for multi-tenancy, role-based access, auditing, connectors, and background jobs without implementing business logic yet.

### Core principles

- Multi-tenant by default: all protected business data should be scoped by `tenantId`.
- Clear service boundaries: business use cases depend on contracts, not direct framework code.
- Extensible modules: connectors, jobs, and feature modules live in separate bounded folders.
- Audit-first foundation: important state changes should be recordable from day one.
- Thin UI shell: the app layer renders placeholders and routes into future feature modules.

### Folder structure

```text
app/                         Next.js App Router entrypoints and layouts
components/                  UI building blocks and shared presentation components
lib/                         Frontend-safe utilities
prisma/                      Database schema and future migrations
src/
  core/
    contracts/               Repository and service interfaces
    errors/                  Shared application error types
    types/                   Shared domain and platform types
  modules/
    connectors/              Future connector definitions and integration logic
    jobs/                    Background job contracts and dispatching abstractions
    storepilot/              StorePilot feature module boundary
  server/
    db/                      Prisma client wiring
    repositories/            Prisma-backed repository implementations
    services/                Server-side service implementations
    container.ts             Central dependency composition
```

### Application layers

- `app/` and `components/`: presentation layer and route shells.
- `src/core/`: stable contracts and types shared across modules.
- `src/modules/`: feature-oriented domains that can grow independently.
- `src/server/repositories/`: infrastructure adapters for persistence.
- `src/server/services/`: orchestrators that enforce tenancy, RBAC, and audit concerns.

### Multi-tenancy and RBAC foundation

- `Tenant`, `User`, and `Membership` are modeled in Prisma.
- A user can belong to multiple tenants with a role per tenant.
- The initial roles are `OWNER`, `ADMIN`, `ANALYST`, `OPERATOR`, and `VIEWER`.
- `TenantService` centralizes tenant lookup and role checks.

### Audit log foundation

- `AuditLog` stores tenant-scoped actions with actor, entity, metadata, and timestamp.
- `AuditService` is the abstraction for writing audit events.
- Concrete audit persistence currently uses Prisma, but the contract allows replacement later.

### Extensibility for connectors and jobs

- `src/modules/connectors/` contains placeholder connector definitions for future integrations.
- `src/modules/jobs/` contains background job contracts and a no-op dispatcher.
- This keeps ingestion and async processing separate from the web layer and makes it easier to introduce workers later.

### Current status

- App Router shell is in place.
- Tailwind and shadcn/ui-compatible base components are in place.
- Prisma schema includes tenant, membership, and audit primitives.
- Service and repository layers are scaffolded.
- Business logic is intentionally not implemented yet.
