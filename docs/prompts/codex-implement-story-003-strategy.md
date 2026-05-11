# Codex Prompt: Implement STORY-003 Priority Strategy

```text
Read the following files before making changes:
- AGENTS.md
- docs/requirements/story-003-prioritize-task.md
- docs/architecture/design-pattern-choice.md
- docs/decisions/adr-001-use-strategy-for-task-priority.md
- docs/diagrams/priority-strategy-class-diagram.md

Implement STORY-003: Prioritize Task using the Strategy Pattern.

Required files/classes/interfaces:
- PriorityStrategy interface
- DeadlinePriorityStrategy
- ImportancePriorityStrategy
- EffortPriorityStrategy
- CompositePriorityStrategy
- TaskPriorityService

Rules:
- Do not implement priority logic in React components.
- Do not collapse strategies into one large conditional block.
- Inject currentDate into calculations.
- Do not read current time inside pure functions.
- Do not access localStorage, DOM, or network from strategies.
- Add unit tests for every strategy.

Acceptance criteria:
- overdue task returns urgent with DeadlinePriorityStrategy,
- task due within 24 hours returns high,
- explicit high importance returns high,
- composite strategy returns the highest priority from child strategies.

After implementation:
- summarize changed files,
- explain how Strategy Pattern is represented,
- list tests added,
- tell me how to run tests.
```
