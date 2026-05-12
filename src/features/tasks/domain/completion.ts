import type { Task } from "./task";

export function completeTask(task: Task, completedAt: string): Task {
  if (task.status === "completed") {
    return task;
  }

  return {
    ...task,
    status: "completed",
    completedAt
  };
}
