import type { Task, TaskPriority } from "../domain/task";

export interface PriorityStrategy {
  calculate(task: Task, currentDate: Date): TaskPriority;
}
