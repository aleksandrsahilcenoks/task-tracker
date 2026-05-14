import { getHighestPriority } from "../domain/priority";
import type { Task, TaskPriority } from "../domain/task";
import type { PriorityStrategy } from "./priority-strategy";

export class CompositePriorityStrategy implements PriorityStrategy {
  constructor(private readonly strategies: PriorityStrategy[]) {}

  calculate(task: Task, currentDate: Date): TaskPriority {
    const priorities = this.strategies.map((strategy) =>
      strategy.calculate(task, currentDate)
    );

    return getHighestPriority(priorities);
  }
}
