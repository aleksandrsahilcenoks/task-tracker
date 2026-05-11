# ADR-001: Use Strategy Pattern for Task Priority Calculation

## Status

Accepted

## Context

Practical Assignment 4 requires implementing business logic from a selected feature using a suitable design pattern.

The selected feature is:

```text
STORY-003: Prioritize Task
```

Task priority may be calculated through different rules:

- deadline-based priority,
- importance-based priority,
- effort-based priority,
- composite priority.

If all rules are placed inside one function with many conditional branches, the code may become difficult to maintain and extend.

This is especially risky in AI-assisted development because an AI agent may add new conditions into unrelated parts of the logic.

## Decision

Use the **Strategy Pattern** for task priority calculation.

Each priority algorithm will be implemented as a separate strategy with a common interface.

## Pattern Participants

```text
PriorityStrategy
├── DeadlinePriorityStrategy
├── ImportancePriorityStrategy
├── EffortPriorityStrategy
└── CompositePriorityStrategy
```

`TaskPriorityService` will use the selected strategy.

## Consequences

### Positive

- Clear separation of algorithms.
- Easy addition of new priority strategies.
- Better testability.
- Less risk of spaghetti code.
- Stronger architectural harness for Codex.

### Negative

- More files than a simple implementation.
- Slightly more abstraction.
- Requires discipline to preserve the pattern.

## Rules for Future Changes

- Do not add new priority rules to unrelated modules.
- Do not calculate priority in React components.
- Do not directly read current time inside pure functions.
- New priority behavior must be added as a new strategy.
- Every strategy must have unit tests.
