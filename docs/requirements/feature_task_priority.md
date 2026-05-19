# Feature: Task Priority Calculation

## User Story

As a task tracker user, I want the system to calculate task priority from task metadata, so that I can focus on the most important work first.

## Selected MVP Feature

Task priority calculation is the selected critical MVP feature because it turns a simple list of tasks into a focused planning tool. The feature is small enough to specify precisely, but important enough to justify a strict engineering harness.

## Business Inputs

- Task due date.
- Task importance: `low`, `medium`, or `high`.
- Estimated effort in hours.
- Current date injected by the caller.

## Acceptance Criteria

### Scenario 1: Overdue Task

Given an active task has a due date before the injected current date  
When the system calculates priority with the deadline strategy  
Then the result is `urgent`

### Scenario 2: Near Deadline Task

Given an active task is due within the next 24 hours  
When the system calculates priority with the deadline strategy  
Then the result is `high`

### Scenario 3: Explicit Importance

Given an active task has importance `high`  
When the system calculates priority with the importance strategy  
Then the result is `high`

### Scenario 4: Composite Priority

Given one configured strategy returns `medium`  
And another configured strategy returns `urgent`  
When the system calculates priority with the composite strategy  
Then the result is `urgent`

## Pure Function Constraint

Priority logic must be deterministic:

- It must not read system time directly.
- It must not mutate the task.
- It must not access React, DOM, localStorage, network, or process state.
- It must return the same priority for the same task and injected current date.

## Traceability

Implementation:

- `src/features/tasks/strategies/deadline-priority-strategy.ts`
- `src/features/tasks/strategies/importance-priority-strategy.ts`
- `src/features/tasks/strategies/effort-priority-strategy.ts`
- `src/features/tasks/strategies/composite-priority-strategy.ts`
- `src/features/tasks/services/task-priority-service.ts`

Tests:

- `src/features/tasks/__tests__/deadline-priority-strategy.test.ts`
- `src/features/tasks/__tests__/importance-priority-strategy.test.ts`
- `src/features/tasks/__tests__/effort-priority-strategy.test.ts`
- `src/features/tasks/__tests__/composite-priority-strategy.test.ts`
- `src/features/tasks/__tests__/task-priority-service.test.ts`
