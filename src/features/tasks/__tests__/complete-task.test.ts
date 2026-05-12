import { describe, expect, it } from "vitest";
import { completeTask } from "../domain/completion";
import type { Task } from "../domain/task";

const activeTask: Task = {
  id: "task-1",
  title: "Write tests",
  status: "active",
  importance: "medium",
  createdAt: "2025-05-12T09:00:00.000Z"
};

describe("completeTask", () => {
  it("completes an active task with injected timestamp", () => {
    const completed = completeTask(activeTask, "2025-05-12T10:00:00.000Z");

    expect(completed.status).toBe("completed");
    expect(completed.completedAt).toBe("2025-05-12T10:00:00.000Z");
  });

  it("does not mutate the original task", () => {
    completeTask(activeTask, "2025-05-12T10:00:00.000Z");

    expect(activeTask.status).toBe("active");
    expect(activeTask.completedAt).toBeUndefined();
  });

  it("does not overwrite an existing completion timestamp", () => {
    const alreadyCompleted: Task = {
      ...activeTask,
      status: "completed",
      completedAt: "2025-05-12T10:00:00.000Z"
    };

    const result = completeTask(alreadyCompleted, "2025-05-12T11:00:00.000Z");

    expect(result.completedAt).toBe("2025-05-12T10:00:00.000Z");
  });
});
