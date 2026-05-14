import type { Task } from "../domain/task";

export interface TaskRepository {
  list(): Promise<Task[]>;
  findById(id: string): Promise<Task | undefined>;
  save(task: Task): Promise<Task>;
  replaceAll(tasks: Task[]): Promise<void>;
}
