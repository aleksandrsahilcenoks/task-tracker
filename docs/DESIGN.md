# Task Tracker Design System

This is the canonical Spec-Driven UI contract for Practical Assignment 5. The root `DESIGN.md` mirrors the same rules for quick discovery by AI coding tools.

## Framework Choice

- React for the UI.
- Tailwind CSS for styling.
- Vite for local development and production build.
- Vitest and Testing Library for verification.

## Product Frame

Task Tracker is a compact productivity tool for a Software Engineering course project. The interface should feel practical, structured, and quiet. It is not a marketing site or a decorative dashboard.

## Color Palette

| Role | Token | Hex |
|---|---|---:|
| Primary action | `brand` | `#2563eb` |
| Secondary surface | `surface` | `#f7f8fa` |
| Text | `ink` | `#17202a` |
| Border | `line` | `#d9dee7` |
| Success | `success` | `#16803c` |
| Warning | `warning` | `#b7791f` |
| Danger | `danger` | `#c2410c` |

## Typography and Spacing

- Use system UI fonts through Tailwind.
- Use readable headings, not oversized landing-page typography.
- Use `p-4` or `p-5` for cards and forms.
- Use `gap-3`, `gap-4`, or `gap-6` for layout rhythm.
- Cards must use `rounded-lg` at most.
- Avoid nested cards.

## Component Rules

### Buttons

- Primary action: blue background, white text, rounded corners.
- Secondary actions: bordered buttons with neutral text.
- Do not place two primary buttons next to each other.
- Prefer icon plus text when the action benefits from an icon.

### Forms

- Every input must have a label.
- Validation messages must come from application services, not duplicated component logic.
- Numeric effort input must use `type="number"` with a non-negative minimum.

### Task Cards

- Show title, optional description, status, priority, due date, importance, and effort.
- Priority must be shown as text plus color, never color alone.
- Active tasks show a `Complete` action.
- Completed tasks must not show the `Complete` action.

### Filtering

- Use a segmented control for `all`, `active`, and `completed`.
- Filtering is UI state only.

## Integration Rules

- UI must call `TaskService` for creation and completion.
- UI must call `TaskPriorityService` for priority view models.
- UI must not instantiate individual strategy classes directly.
- UI must not read or write localStorage directly.
- Browser persistence must stay behind `TaskRepository`.

## Accessibility Rules

- Labels are required for form controls.
- Interactive elements must be buttons or form controls.
- Status and priority must be readable as text.
- Layout must work on mobile and desktop without overlapping text.
