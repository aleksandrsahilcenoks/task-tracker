import { describe, expect, it } from "vitest";
import type { Task } from "../domain/task";
import { TaskPriorityService } from "../services/task-priority-service";
import type { PriorityStrategy } from "../strategies/priority-strategy";

const task: Task = {
  id: "task-1",
  title: "Service task",
  status: "active",
  importance: "medium",
  createdAt: "2025-05-14T09:00:00.000Z"
};

const fixedStrategy = (priority: "low" | "medium" | "high" | "urgent"): PriorityStrategy => ({
  calculate: () => priority
});

describe("TaskPriorityService", () => {
  it("calculates priority using the selected strategy", () => {
    const service = new TaskPriorityService(fixedStrategy("high"));

    expect(service.calculate(task, new Date("2025-05-14T09:00:00.000Z"))).toBe("high");
  });

  it("can replace strategy at runtime", () => {
    const service = new TaskPriorityService(fixedStrategy("low"));

    service.setStrategy(fixedStrategy("urgent"));

    expect(service.calculate(task, new Date("2025-05-14T09:00:00.000Z"))).toBe("urgent");
  });
});
