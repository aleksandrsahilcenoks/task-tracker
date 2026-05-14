import { describe, expect, it } from "vitest";
import type { Task } from "../domain/task";
import { CompositePriorityStrategy } from "../strategies/composite-priority-strategy";
import type { PriorityStrategy } from "../strategies/priority-strategy";

const task: Task = {
  id: "task-1",
  title: "Composite task",
  status: "active",
  importance: "medium",
  createdAt: "2025-05-13T09:00:00.000Z"
};

const fixedStrategy = (priority: "low" | "medium" | "high" | "urgent"): PriorityStrategy => ({
  calculate: () => priority
});

describe("CompositePriorityStrategy", () => {
  it("returns the highest strategy priority", () => {
    const strategy = new CompositePriorityStrategy([
      fixedStrategy("medium"),
      fixedStrategy("urgent"),
      fixedStrategy("low")
    ]);

    expect(strategy.calculate(task, new Date("2025-05-13T09:00:00.000Z"))).toBe("urgent");
  });

  it("returns low when no strategies are configured", () => {
    const strategy = new CompositePriorityStrategy([]);

    expect(strategy.calculate(task, new Date("2025-05-13T09:00:00.000Z"))).toBe("low");
  });
});
