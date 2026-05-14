import type { Task } from "../domain/task";
import type { TaskRepository } from "./task-repository";

export class LocalStorageTaskRepository implements TaskRepository {
  constructor(
    private readonly storage: Storage,
    private readonly storageKey = "task-tracker:tasks"
  ) {}

  async list(): Promise<Task[]> {
    const raw = this.storage.getItem(this.storageKey);

    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  async findById(id: string): Promise<Task | undefined> {
    const tasks = await this.list();
    return tasks.find((task) => task.id === id);
  }

  async save(task: Task): Promise<Task> {
    const tasks = await this.list();
    const exists = tasks.some((item) => item.id === task.id);
    const nextTasks = exists
      ? tasks.map((item) => (item.id === task.id ? task : item))
      : [task, ...tasks];

    await this.replaceAll(nextTasks);
    return task;
  }

  async replaceAll(tasks: Task[]): Promise<void> {
    this.storage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
