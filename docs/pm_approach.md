# Project Management Approach

## Selected Approach

This project will use **Scrumban**: a lightweight hybrid of Scrum and Kanban.

## Why Scrumban

The project is small and mostly developed by one person, so full Scrum would be too heavy. However, the course still requires clear planning, review, and traceability.

Scrumban is suitable because it combines:

- Scrum-like planning through milestones and feature goals,
- Kanban-like continuous flow through GitHub Issues and Pull Requests,
- explicit documentation for AI-native development.

## Workflow

The project will use the following workflow:

```text
Backlog → Ready → In Progress → Review → Done
```

## GitHub Issues

Every significant change should begin as a GitHub Issue.

Issue types:

- `docs` — documentation or planning,
- `feature` — user-facing functionality,
- `architecture` — design pattern or structure,
- `test` — test coverage,
- `refactor` — internal improvement.

## Pull Requests

Every feature should be implemented through a Pull Request.

Each Pull Request should:

- reference an Issue,
- describe the change,
- list acceptance criteria,
- mention tests,
- include screenshots if UI changed.

## Definition of Done

A task is done when:

- related requirements are documented,
- code is implemented,
- tests pass,
- documentation is updated,
- Pull Request is reviewed and merged,
- linked Issue is closed.

## AI-Native Project Management

The repository itself acts as an engineering harness.

AI agents should be guided by:

- `AGENTS.md`,
- atomic requirements,
- BDD acceptance criteria,
- Mermaid diagrams,
- ADRs,
- tests.
