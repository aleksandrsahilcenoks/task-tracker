import type { Task, TaskPriority } from "../domain/task";
import type { PriorityStrategy } from "./priority-strategy";

export class EffortPriorityStrategy implements PriorityStrategy {
  calculate(task: Task, _currentDate: Date): TaskPriority {
    const effort = task.estimatedEffortHours ?? 0;

    if (effort > 8) {
      return "high";
    }

    if (effort >= 3) {
      return "medium";
    }

    return "low";
  }
}
