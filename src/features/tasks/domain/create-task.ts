import type { Task, TaskInput } from "./task";

export function createTask(
  input: TaskInput,
  id: string,
  createdAt: string
): Task {
  return {
    id,
    title: input.title.trim(),
    description: input.description?.trim() || undefined,
    status: "active",
    dueDate: input.dueDate,
    importance: input.importance ?? "medium",
    estimatedEffortHours: input.estimatedEffortHours,
    createdAt
  };
}
