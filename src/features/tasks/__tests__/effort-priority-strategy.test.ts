import { describe, expect, it } from "vitest";
import type { Task } from "../domain/task";
import { EffortPriorityStrategy } from "../strategies/effort-priority-strategy";

const task: Task = {
  id: "task-1",
  title: "Effort task",
  status: "active",
  importance: "medium",
  createdAt: "2025-05-13T09:00:00.000Z"
};

const strategy = new EffortPriorityStrategy();

describe("EffortPriorityStrategy", () => {
  it("returns high for effort greater than 8 hours", () => {
    expect(strategy.calculate({ ...task, estimatedEffortHours: 9 }, new Date())).toBe("high");
  });

  it("returns medium for effort between 3 and 8 hours", () => {
    expect(strategy.calculate({ ...task, estimatedEffortHours: 5 }, new Date())).toBe("medium");
  });

  it("returns low for effort below 3 hours", () => {
    expect(strategy.calculate({ ...task, estimatedEffortHours: 2 }, new Date())).toBe("low");
  });

  it("returns low when effort is missing", () => {
    expect(strategy.calculate(task, new Date())).toBe("low");
  });
});
