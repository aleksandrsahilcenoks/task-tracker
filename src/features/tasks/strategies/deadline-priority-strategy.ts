import type { Task, TaskPriority } from "../domain/task";
import type { PriorityStrategy } from "./priority-strategy";

const oneDayMs = 24 * 60 * 60 * 1000;
const sevenDaysMs = 7 * oneDayMs;

export class DeadlinePriorityStrategy implements PriorityStrategy {
  calculate(task: Task, currentDate: Date): TaskPriority {
    if (!task.dueDate) {
      return "low";
    }

    const dueTime = new Date(task.dueDate).getTime();
    const currentTime = currentDate.getTime();
    const differenceMs = dueTime - currentTime;

    if (differenceMs < 0) {
      return "urgent";
    }

    if (differenceMs <= oneDayMs) {
      return "high";
    }

    if (differenceMs <= sevenDaysMs) {
      return "medium";
    }

    return "low";
  }
}
