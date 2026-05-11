# Task Tracker

Task Tracker is a course project for the Software Engineering 2025–2026 practical assignments.

The project is a small task-management application focused on AI-native software engineering practices: explicit requirements, UML-as-code, clean architecture, design patterns, and testable business logic.

## Project Goals

- Create, view, update, complete, and organize tasks.
- Keep business logic separated from UI code.
- Use AI-ready requirements to guide implementation.
- Document the project through GitHub Issues, Pull Requests, Mermaid diagrams, and architectural decisions.
- Apply a suitable design pattern to prevent unmaintainable spaghetti code.

## Course Assignments Covered

### Practical Assignment 2 — SWE Project Planning

This repository includes:

- `/docs` folder.
- `docs/pm_approach.md`.
- `AGENTS.md`.
- GitHub Issue and Pull Request workflow.
- Documentation-first project setup.

### Practical Assignment 3 — AI-Ready Requirements and UML-as-Code

This repository includes:

- atomic user stories,
- BDD acceptance criteria,
- Mermaid diagrams,
- pure-function contracts,
- AI-ready constraints.

### Practical Assignment 4 — Architectural Patterns and Structural Integrity

The selected feature is **Task Priority Calculation**.

The selected design pattern is **Strategy Pattern**.

The business logic will be implemented through interchangeable priority calculation strategies instead of one large conditional block.

## Suggested Tech Stack

- TypeScript
- React
- Vite
- Vitest

The exact implementation may evolve, but Codex must preserve the architectural rules defined in `AGENTS.md`.

## Repository Structure

```text
.
├── AGENTS.md
├── README.md
├── docs/
│   ├── pm_approach.md
│   ├── requirements/
│   ├── diagrams/
│   ├── architecture/
│   ├── decisions/
│   └── prompts/
├── src/
│   └── features/
│       └── tasks/
│           ├── domain/
│           ├── strategies/
│           ├── services/
│           ├── repositories/
│           └── __tests__/
└── tests/
```

## Definition of Done

A feature is done only when:

- requirements are documented,
- BDD acceptance criteria are satisfied,
- business logic is covered by tests,
- Mermaid diagrams are updated if structure changes,
- implementation follows `AGENTS.md`,
- Pull Request is linked to a GitHub Issue.
