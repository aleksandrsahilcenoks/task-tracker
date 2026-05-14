import { describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory-task-repository";
import { TaskService } from "../services/task-service";

const now = () => "2025-05-14T17:00:00.000Z";
const idGenerator = () => "task-1";

describe("TaskService", () => {
  it("creates a valid task", async () => {
    const service = new TaskService(new InMemoryTaskRepository(), idGenerator, now);

    const result = await service.create({ title: "Write docs" });

    expect(result.ok).toBe(true);
    expect(result.task).toMatchObject({
      id: "task-1",
      title: "Write docs",
      status: "active"
    });
  });

  it("rejects invalid task input", async () => {
    const service = new TaskService(new InMemoryTaskRepository(), idGenerator, now);

    const result = await service.create({ title: " " });

    expect(result.ok).toBe(false);
    expect(result.errors).toContain("Task title is required");
  });

  it("completes an existing task", async () => {
    const service = new TaskService(new InMemoryTaskRepository(), idGenerator, now);
    await service.create({ title: "Finish feature" });

    const result = await service.complete("task-1");

    expect(result.ok).toBe(true);
    expect(result.task?.status).toBe("completed");
    expect(result.task?.completedAt).toBe(now());
  });

  it("returns an error for a missing task", async () => {
    const service = new TaskService(new InMemoryTaskRepository(), idGenerator, now);

    const result = await service.complete("missing");

    expect(result.ok).toBe(false);
    expect(result.errors).toContain("Task not found");
  });
});
