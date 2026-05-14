import type { Task } from "../domain/task";
import type { TaskRepository } from "./task-repository";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[];

  constructor(initialTasks: Task[] = []) {
    this.tasks = [...initialTasks];
  }

  async list(): Promise<Task[]> {
    return [...this.tasks];
  }

  async findById(id: string): Promise<Task | undefined> {
    return this.tasks.find((task) => task.id === id);
  }

  async save(task: Task): Promise<Task> {
    const existingIndex = this.tasks.findIndex((item) => item.id === task.id);

    if (existingIndex >= 0) {
      this.tasks = this.tasks.map((item) => (item.id === task.id ? task : item));
      return task;
    }

    this.tasks = [task, ...this.tasks];
    return task;
  }

  async replaceAll(tasks: Task[]): Promise<void> {
    this.tasks = [...tasks];
  }
}
