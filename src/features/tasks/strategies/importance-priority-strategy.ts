import type { Task, TaskPriority } from "../domain/task";
import type { PriorityStrategy } from "./priority-strategy";

export class ImportancePriorityStrategy implements PriorityStrategy {
  calculate(task: Task): TaskPriority {
    return task.importance;
  }
}
