# Task Tracker

Task Tracker is a TypeScript, React, Vite, Tailwind, and Vitest course project for Software Engineering 2025-2026 practical assignments.

The project demonstrates AI-native software engineering through explicit requirements, Mermaid diagrams, an AGENTS.md repository contract, a DESIGN.md UI contract, clean business boundaries, and tests around pure logic.

## Features

- Create tasks with title, description, due date, importance, and estimated effort.
- Complete active tasks without overwriting the original completion timestamp.
- Calculate task priority with the Strategy Pattern.
- View all, active, and completed tasks.
- Store tasks locally through a repository adapter.

## Tech Stack

- TypeScript
- React
- Vite
- Tailwind CSS
- Vitest
- Testing Library

## Scripts

```bash
npm install
npm run dev
npm test -- --run
npm run build
npm run preview
```

## Repository Structure

```text
.
├── AGENTS.md
├── DESIGN.md
├── README.md
├── docs/
│   ├── pm_approach.md
│   ├── requirements/
│   ├── diagrams/
│   ├── architecture/
│   ├── decisions/
│   └── prompts/
├── src/
│   ├── app/
│   │   └── create-task-services.ts
│   ├── features/
│   │   └── tasks/
│   │       ├── __tests__/
│   │       ├── domain/
│   │       ├── repositories/
│   │       ├── services/
│   │       ├── strategies/
│   │       └── ui/
│   ├── test/
│   │   └── setup.ts
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.css
│   └── main.tsx
└── package.json
```

## Architecture

Task business logic lives under `src/features/tasks`.

- Domain functions are pure and tested.
- Priority logic uses Strategy Pattern classes.
- Services orchestrate use cases.
- Repositories hide persistence.
- React components call services through `useTaskTracker`.

No backend is required for the initial version. The persistence layer is designed so a backend repository adapter can replace localStorage later without changing domain rules or UI workflows.

## Assignment Coverage

- Practical Assignment 2: documentation-first repository setup.
- Practical Assignment 3: AI-ready requirements and Mermaid UML-as-code.
- Practical Assignment 4: Strategy Pattern for task priority calculation.
- UI assignment: DESIGN.md contract and React/Tailwind frontend connected to task logic.

## Definition of Done

A change is complete only when:

- requirements or design docs are updated when behavior changes,
- pure domain logic has tests,
- priority strategies have tests,
- `npm test -- --run` passes,
- `npm run build` passes.

## Deployment

The app is deployment-ready for Vercel or Netlify.

Vercel configuration is stored in `vercel.json`.

Deployment details are documented in `docs/deployment.md`.

## Final Report

The final course report is written in Markdown at `FINAL_REPORT.md` so it can be exported to PDF for Moodle submission.
