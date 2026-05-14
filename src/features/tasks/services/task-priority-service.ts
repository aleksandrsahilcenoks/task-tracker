import type { Task, TaskPriority } from "../domain/task";
import type { PriorityStrategy } from "../strategies/priority-strategy";

export class TaskPriorityService {
  constructor(private strategy: PriorityStrategy) {}

  setStrategy(strategy: PriorityStrategy): void {
    this.strategy = strategy;
  }

  calculate(task: Task, currentDate: Date): TaskPriority {
    return this.strategy.calculate(task, currentDate);
  }
}
