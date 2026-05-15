import { CompositePriorityStrategy } from "../strategies/composite-priority-strategy";
import { DeadlinePriorityStrategy } from "../strategies/deadline-priority-strategy";
import { EffortPriorityStrategy } from "../strategies/effort-priority-strategy";
import { ImportancePriorityStrategy } from "../strategies/importance-priority-strategy";
import { TaskPriorityService } from "./task-priority-service";

export function createDefaultPriorityService(): TaskPriorityService {
  return new TaskPriorityService(
    new CompositePriorityStrategy([
      new DeadlinePriorityStrategy(),
      new ImportancePriorityStrategy(),
      new EffortPriorityStrategy()
    ])
  );
}
