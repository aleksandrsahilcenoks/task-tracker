import type { TaskImportance, TaskInput, TaskValidationResult } from "./task";

const allowedImportance: TaskImportance[] = ["low", "medium", "high"];

export function validateTaskInput(input: TaskInput): TaskValidationResult {
  const errors: string[] = [];

  if (!input.title || input.title.trim().length === 0) {
    errors.push("Task title is required");
  }

  if (
    input.importance !== undefined &&
    !allowedImportance.includes(input.importance)
  ) {
    errors.push("Importance must be low, medium, or high");
  }

  if (
    input.estimatedEffortHours !== undefined &&
    (!Number.isFinite(input.estimatedEffortHours) ||
      input.estimatedEffortHours < 0)
  ) {
    errors.push("Estimated effort must be a non-negative number");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
