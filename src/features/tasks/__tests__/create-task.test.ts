import { describe, expect, it } from "vitest";
import { createTask } from "../domain/create-task";

describe("createTask", () => {
  it("creates an active task from valid input", () => {
    const task = createTask(
      { title: "  Write project documentation  " },
      "task-123",
      "2025-05-12T09:00:00.000Z"
    );

    expect(task).toMatchObject({
      id: "task-123",
      title: "Write project documentation",
      status: "active",
      importance: "medium",
      createdAt: "2025-05-12T09:00:00.000Z"
    });
  });

  it("stores optional metadata", () => {
    const task = createTask(
      {
        title: "Prepare demo",
        description: "Show task flow",
        dueDate: "2025-05-20",
        importance: "high",
        estimatedEffortHours: 3
      },
      "task-124",
      "2025-05-12T09:00:00.000Z"
    );

    expect(task.description).toBe("Show task flow");
    expect(task.dueDate).toBe("2025-05-20");
    expect(task.importance).toBe("high");
    expect(task.estimatedEffortHours).toBe(3);
  });
});
