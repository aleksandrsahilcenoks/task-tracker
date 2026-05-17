# Task Tracker Design System

## Product Frame

Task Tracker is a compact localhost-first productivity tool for a Software Engineering course project. The interface should feel practical, structured, and quiet. It is not a marketing page.

## Layout

- The first screen is the working task tracker.
- Desktop uses a two-column layout:
  - left column: project heading and task creation form,
  - right column: summary, filters, and task list.
- Mobile stacks the same sections vertically.
- Cards are used only for repeated items, forms, and summary metrics.

## Visual Tokens

| Token | Value | Use |
|---|---:|---|
| `ink` | `#17202a` | Primary text and selected controls |
| `surface` | `#f7f8fa` | App background |
| `line` | `#d9dee7` | Borders |
| `brand` | `#2563eb` | Primary action |
| `success` | `#16803c` | Completion status |
| `warning` | `#b7791f` | Medium priority |
| `danger` | `#c2410c` | High priority and validation |

## Components

### Task Form

- Inputs: title, description, due date, importance, estimated effort.
- The form does not perform business validation directly.
- Validation errors come from `TaskService`.

### Task Summary

- Shows active tasks, completed tasks, and focus tasks.
- Focus means active tasks with high or urgent priority.

### Task Filters

- Segmented control with `all`, `active`, and `completed`.
- Filtering is UI state only; task status rules stay in domain/service code.

### Task List

- Each task card displays title, description, status, priority, due date, importance, and effort.
- Active tasks expose a `Complete` action.
- Completed tasks do not expose the completion action.

## Accessibility

- Form controls use labels.
- Buttons use readable text plus icons where helpful.
- Colors are paired with text labels; priority is never color-only.

## Implementation Contract

- React components must not calculate priority.
- React components must not validate task input rules.
- Browser storage access must stay behind `TaskRepository`.
- Priority calculation must use `TaskPriorityService` and strategy classes.
