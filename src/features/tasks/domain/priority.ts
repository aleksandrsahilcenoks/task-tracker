import type { TaskPriority } from "./task";

const priorityRank: Record<TaskPriority, number> = {
  low: 1,
  medium: 2,
  high: 3,
  urgent: 4
};

export function getHighestPriority(priorities: TaskPriority[]): TaskPriority {
  return priorities.reduce<TaskPriority>((highest, current) => {
    return priorityRank[current] > priorityRank[highest] ? current : highest;
  }, "low");
}
