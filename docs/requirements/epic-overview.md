# Epic Overview: Task Management System

## Epic

As a user, I want to manage my personal tasks so that I can organize work, track progress, and focus on what matters most.

## Scope

The first version of the task tracker will support:

- creating a task,
- marking a task as completed,
- calculating task priority,
- listing tasks,
- storing tasks locally.

## Out of Scope for Initial Version

- user accounts,
- cloud synchronization,
- team collaboration,
- notifications,
- calendar integrations,
- recurring tasks.

These may be added later if the architecture supports extension.

## Atomic Stories

| Story ID | Title | Main Purpose |
|---|---|---|
| STORY-001 | Create Task | Allow user to create a valid task |
| STORY-002 | Complete Task | Allow user to mark a task as completed |
| STORY-003 | Prioritize Task | Calculate task priority through Strategy Pattern |

## Selected Feature for Assignment 4

The selected feature for pattern-based implementation is:

```text
STORY-003 — Prioritize Task
```

## Main Business Entities

- Task
- TaskStatus
- TaskPriority
- PriorityStrategy
- TaskRepository

## Business Rules Summary

- A task must have a non-empty title.
- A task may have an optional description.
- A task may have an optional due date.
- A task may have an importance level.
- A task may have an estimated effort.
- A completed task must keep its completion timestamp.
- Priority calculation must be testable and independent from UI code.
