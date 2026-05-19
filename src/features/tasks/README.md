# Tasks Feature Module

## Purpose

This module owns all task-related business logic for the Task Tracker MVP.

It supports:

- task creation,
- task completion,
- task listing,
- local persistence through repository adapters,
- priority calculation through the Strategy Pattern.

## Selected Design Pattern

The selected pattern is the Strategy Pattern.

The pattern is used for task priority calculation because priority can be derived from several interchangeable algorithms:

- deadline proximity,
- explicit importance,
- estimated effort,
- a composite result that returns the highest priority.

Without this pattern, future changes would likely become one large conditional function. That would be harder to test and easier for an AI coding agent to damage while adding new rules.

## Pattern Participants

| Participant | File | Responsibility |
|---|---|---|
| `PriorityStrategy` | `strategies/priority-strategy.ts` | Common interface |
| `DeadlinePriorityStrategy` | `strategies/deadline-priority-strategy.ts` | Calculates deadline-based priority |
| `ImportancePriorityStrategy` | `strategies/importance-priority-strategy.ts` | Maps explicit importance |
| `EffortPriorityStrategy` | `strategies/effort-priority-strategy.ts` | Maps estimated effort |
| `CompositePriorityStrategy` | `strategies/composite-priority-strategy.ts` | Returns the highest strategy output |
| `TaskPriorityService` | `services/task-priority-service.ts` | Context/orchestrator |

## Module Structure

```text
src/features/tasks/
  __tests__/       Vitest coverage for domain, services, repositories, UI flows
  domain/          Pure functions and task types
  repositories/    Persistence interfaces and adapters
  services/        Use-case orchestration
  strategies/      Priority Strategy Pattern implementations
  ui/              React components and task tracker hook
```

## Interaction With Other Components

- `src/app/create-task-services.ts` composes concrete services for the browser.
- `TaskService` depends on `TaskRepository`, not on `localStorage`.
- `useTaskTracker` calls `TaskService` and `TaskPriorityService`.
- React components receive view models and callbacks from `useTaskTracker`.
- Components do not calculate priority or validate task input directly.

## Extension Rules

- Add new priority behavior as a new `PriorityStrategy` implementation.
- Add tests for every new strategy.
- Do not move priority logic into React components.
- Do not read the current date inside pure domain logic.
- Keep browser APIs inside repository adapters or the composition root.
