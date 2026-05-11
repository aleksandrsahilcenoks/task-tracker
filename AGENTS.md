# AGENTS.md

This file defines operational rules for AI coding agents working in this repository.

## Project Identity

This repository contains a TypeScript task tracker application for a Software Engineering course project.

The project is intentionally documentation-first and AI-native. Do not treat tasks as vague prompts. Treat every implementation request as a contract defined by requirements, diagrams, tests, and architectural decisions.

## Primary Objective

Build a maintainable task tracker with clear business logic boundaries.

The application should support:

- creating tasks,
- completing tasks,
- calculating task priority,
- viewing task lists,
- keeping task-related logic testable and modular.

## Required Stack

Use:

- TypeScript for all application logic,
- React for UI,
- Vite as the build tool,
- Vitest for tests.

Do not introduce another framework unless the user explicitly asks for it and documentation is updated.

## Repository Map

```text
docs/
  requirements/    AI-ready requirements and BDD stories
  diagrams/        Mermaid UML-as-code diagrams
  architecture/    architecture overview and pattern explanations
  decisions/       ADR files
  prompts/         Codex implementation prompts

src/features/tasks/
  domain/          core task types and pure functions
  strategies/      Strategy Pattern implementations
  services/        orchestration logic
  repositories/    persistence adapters
  __tests__/       feature tests
```

## Architecture Rules

- Keep UI separate from business logic.
- Keep task business logic in `src/features/tasks`.
- Keep pure functions free from side effects.
- Do not put priority calculation directly inside React components.
- Do not collapse strategy classes/functions into one large `if/else` block.
- When adding new priority behavior, add a new strategy implementation.
- Prefer small modules with one responsibility.
- Preserve documented interfaces unless a decision record is updated.

## Design Pattern Rule

The selected pattern for Assignment 4 is the **Strategy Pattern** for task priority calculation.

Expected participants:

- `PriorityStrategy` — common interface.
- `DeadlinePriorityStrategy` — calculates priority from due date.
- `ImportancePriorityStrategy` — calculates priority from explicit importance.
- `EffortPriorityStrategy` — calculates priority from estimated effort.
- `CompositePriorityStrategy` — combines several strategies if needed.
- `TaskPriorityService` — context/orchestrator using a selected strategy.

## Testing Rules

- Use Vitest.
- Every pure function must have unit tests.
- Every priority strategy must have tests.
- Tests must cover:
  - happy path,
  - invalid input,
  - missing due date,
  - overdue task,
  - low/medium/high priority cases.

Do not mark a feature complete until tests pass.

## Commit Style

Use Conventional Commits.

Examples:

```text
docs: add AI-ready requirements
feat: implement task priority strategy
test: add priority calculation tests
refactor: extract task repository adapter
```

## Security Rules

- Never hardcode secrets.
- Do not commit `.env` files.
- Use `.env.example` if environment variables become necessary.
- Do not add analytics, tracking, or external APIs unless explicitly requested.

## Documentation Rules

When changing behavior, update at least one relevant file in `docs/`.

When changing architecture, update:

- `docs/architecture/overview.md`,
- the relevant ADR in `docs/decisions/`,
- Mermaid diagrams if relationships change.

## AI Behavior Rules

Before implementation:

1. Read the relevant requirement file.
2. Read the relevant ADR.
3. Read architecture overview.
4. Identify the exact files to change.
5. Write or update tests first when possible.

During implementation:

- keep changes small,
- avoid unrelated refactoring,
- do not invent hidden requirements,
- do not add dependencies without justification,
- do not change public contracts silently.

After implementation:

- run tests,
- summarize changed files,
- explain how acceptance criteria were satisfied.
