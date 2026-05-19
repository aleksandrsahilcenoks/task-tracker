# MVP Roadmap

## Project Goal

Build a maintainable task tracker that demonstrates AI-native software engineering practices: requirements as contracts, Mermaid diagrams, pure business logic, Strategy Pattern priority calculation, a spec-driven UI, tests, and deployment readiness.

## Stage 1: Planning Harness

Status: Complete

Scope:

- Define repository-level AI instructions in `AGENTS.md`.
- Document the project management approach in `docs/pm_approach.md`.
- Split project context into focused documentation files instead of one monolithic document.
- Establish Scrumban workflow and Definition of Done.

Deliverables:

- `AGENTS.md`
- `docs/pm_approach.md`
- `docs/plans/roadmap.md`

## Stage 2: AI-Ready Requirements and UML-as-Code

Status: Complete

Scope:

- Define BDD requirements for the selected MVP feature.
- Create Mermaid flow documentation for the feature.
- Document pure-function boundaries for AI-generated logic.

Selected feature:

- Task priority calculation.

Deliverables:

- `docs/requirements/feature_task_priority.md`
- `docs/architecture/flow_task_priority.md`
- `docs/requirements/story-003-prioritize-task.md`

## Stage 3: Pattern-Based Business Logic

Status: Complete

Scope:

- Implement task priority calculation using the Strategy Pattern.
- Keep strategies separate from React, DOM, storage, and network.
- Add independent tests for each strategy and the service context.

Deliverables:

- `src/features/tasks/strategies/`
- `src/features/tasks/services/task-priority-service.ts`
- `src/features/tasks/README.md`
- `docs/diagrams/priority-strategy-class-diagram.md`

Scope adjustments:

- The selected feature remained priority calculation.
- Local task creation and completion were also implemented because the UI needs tasks to prioritize.

## Stage 4: Spec-Driven UI

Status: Complete

Scope:

- Define the design contract.
- Generate and integrate a React + Tailwind UI.
- Connect UI actions to the existing task module and services.

Deliverables:

- `docs/DESIGN.md`
- `DESIGN.md`
- `src/features/tasks/ui/`
- `src/App.tsx`

Scope adjustments:

- No backend service was added. The MVP uses `LocalStorageTaskRepository`, which keeps the persistence boundary replaceable for future backend deployment.

## Stage 5: Deployment Readiness and Final Report

Status: Complete

Scope:

- Add lightweight deployment configuration.
- Confirm production build works.
- Compile the final report in Markdown so it can be exported to PDF.

Deliverables:

- `vercel.json`
- `docs/deployment.md`
- `FINAL_REPORT.md`

## Deferred Scope

- User accounts.
- Cloud synchronization.
- Team collaboration.
- Notifications.
- Calendar integrations.
- Recurring tasks.
- Backend API and database persistence.

These items are outside the course MVP and can be introduced later by adding new repository adapters and service orchestration without changing the existing domain functions.
