# Architecture Overview

## Architectural Style

The project uses a lightweight feature-based architecture.

The first feature module is:

```text
src/features/tasks/
```

This module owns all task-related domain logic, strategies, services, repositories, and tests.

## Main Layers

### UI Layer

React components display data and receive user actions.

UI must not contain business rules such as validation, completion logic, or priority calculation.

### Service Layer

Services orchestrate use cases.

Example:

- `TaskService`
- `TaskPriorityService`

### Domain Layer

Domain files define core task types and pure functions.

Example:

- `Task`
- `TaskStatus`
- `TaskPriority`
- `validateTaskInput`
- `completeTask`

### Strategy Layer

Strategy files implement interchangeable priority calculation rules.

Example:

- `DeadlinePriorityStrategy`
- `ImportancePriorityStrategy`
- `EffortPriorityStrategy`
- `CompositePriorityStrategy`

### Repository Layer

Repositories hide persistence details.

Initial implementation may use localStorage, but UI and services should depend on repository interfaces rather than direct browser storage calls.

## Dependency Direction

```text
UI → Services → Domain / Strategies / Repositories
```

Domain logic should not depend on UI.

Strategies should not depend on React, DOM, localStorage, or network.

## AI Harness Boundaries

Codex must preserve these boundaries:

- no business logic in components,
- no direct localStorage access from strategies,
- no hidden date reads in pure functions,
- no large conditional priority calculator,
- no undocumented dependencies.
