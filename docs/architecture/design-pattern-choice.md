# Design Pattern Choice

## Selected Feature

`STORY-003: Prioritize Task`

## Selected Pattern

**Strategy Pattern**

## Pattern Type

Behavioral design pattern.

## Intent

Define a family of priority calculation algorithms, encapsulate each algorithm, and make them interchangeable.

## Why This Pattern Fits

Task priority can be calculated in different ways:

- by due date,
- by importance,
- by estimated effort,
- by combining several signals.

Without the Strategy Pattern, this logic may become one large conditional block.

That would make the code harder to extend, harder to test, and easier for AI agents to damage while adding new rules.

## Participants

| Participant | Responsibility |
|---|---|
| `PriorityStrategy` | Common interface for all priority algorithms |
| `DeadlinePriorityStrategy` | Calculates priority from due date |
| `ImportancePriorityStrategy` | Calculates priority from explicit importance |
| `EffortPriorityStrategy` | Calculates priority from estimated effort |
| `CompositePriorityStrategy` | Combines several strategies and returns the highest priority |
| `TaskPriorityService` | Uses a selected strategy to calculate priority |

## Alternatives Considered

| Pattern | Why Considered | Why Not Primary |
|---|---|---|
| Factory | Could create task types | Less relevant to priority calculation |
| Observer | Useful for reacting to task completion | More relevant to notifications/logging |
| Command | Useful for undoable user actions | More relevant to create/delete/complete actions |
| Adapter | Useful for localStorage/API persistence | More relevant to storage layer |

## Consequences

### Benefits

- Priority logic is modular.
- New algorithms can be added without rewriting existing ones.
- Strategies can be tested independently.
- Codex receives a clear architectural shape.

### Trade-offs

- More files/classes than a single function.
- Some overhead for a small project.
- The pattern must be documented to avoid accidental simplification.

## AI Rule

Do not replace the Strategy Pattern with a single conditional function.

Adding a new priority rule requires a new strategy implementation and tests.
