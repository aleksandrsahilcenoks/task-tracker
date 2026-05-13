import { describe, expect, it } from "vitest";
import { DeadlinePriorityStrategy } from "../strategies/deadline-priority-strategy";
import type { Task } from "../domain/task";

const baseTask: Task = {
  id: "task-1",
  title: "Deadline task",
  status: "active",
  importance: "medium",
  createdAt: "2025-05-13T09:00:00.000Z"
};

const currentDate = new Date("2025-05-13T12:00:00.000Z");
const strategy = new DeadlinePriorityStrategy();

describe("DeadlinePriorityStrategy", () => {
  it("returns urgent for overdue tasks", () => {
    expect(
      strategy.calculate({ ...baseTask, dueDate: "2025-05-12T12:00:00.000Z" }, currentDate)
    ).toBe("urgent");
  });

  it("returns high for tasks due within 24 hours", () => {
    expect(
      strategy.calculate({ ...baseTask, dueDate: "2025-05-14T11:00:00.000Z" }, currentDate)
    ).toBe("high");
  });

  it("returns medium for tasks due within 7 days", () => {
    expect(
      strategy.calculate({ ...baseTask, dueDate: "2025-05-18T12:00:00.000Z" }, currentDate)
    ).toBe("medium");
  });

  it("returns low when due date is missing", () => {
    expect(strategy.calculate(baseTask, currentDate)).toBe("low");
  });

  it("returns low for tasks due later than 7 days", () => {
    expect(
      strategy.calculate({ ...baseTask, dueDate: "2025-06-01T12:00:00.000Z" }, currentDate)
    ).toBe("low");
  });
});
