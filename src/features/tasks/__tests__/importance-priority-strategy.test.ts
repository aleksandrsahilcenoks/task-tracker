import { describe, expect, it } from "vitest";
import type { Task } from "../domain/task";
import { ImportancePriorityStrategy } from "../strategies/importance-priority-strategy";

const task: Task = {
  id: "task-1",
  title: "Important task",
  status: "active",
  importance: "medium",
  createdAt: "2025-05-13T09:00:00.000Z"
};

const strategy = new ImportancePriorityStrategy();

describe("ImportancePriorityStrategy", () => {
  it("returns high for high importance", () => {
    expect(strategy.calculate({ ...task, importance: "high" }, new Date())).toBe("high");
  });

  it("returns medium for medium importance", () => {
    expect(strategy.calculate({ ...task, importance: "medium" }, new Date())).toBe("medium");
  });

  it("returns low for low importance", () => {
    expect(strategy.calculate({ ...task, importance: "low" }, new Date())).toBe("low");
  });
});
