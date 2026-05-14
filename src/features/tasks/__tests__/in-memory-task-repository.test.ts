import { describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "../repositories/in-memory-task-repository";
import type { Task } from "../domain/task";

const task: Task = {
  id: "task-1",
  title: "Repository task",
  status: "active",
  importance: "medium",
  createdAt: "2025-05-14T13:00:00.000Z"
};

describe("InMemoryTaskRepository", () => {
  it("saves and lists tasks", async () => {
    const repository = new InMemoryTaskRepository();

    await repository.save(task);

    await expect(repository.list()).resolves.toEqual([task]);
  });

  it("replaces task with the same id", async () => {
    const repository = new InMemoryTaskRepository([task]);

    await repository.save({ ...task, title: "Updated" });

    expect(await repository.findById("task-1")).toMatchObject({ title: "Updated" });
  });

  it("replaces all tasks", async () => {
    const repository = new InMemoryTaskRepository([task]);

    await repository.replaceAll([]);

    await expect(repository.list()).resolves.toEqual([]);
  });
});
