import { completeTask } from "../domain/completion";
import { createTask } from "../domain/create-task";
import type { Task, TaskInput } from "../domain/task";
import { validateTaskInput } from "../domain/validation";
import type { TaskRepository } from "../repositories/task-repository";

type TaskResult =
  | { ok: true; task: Task; errors?: never }
  | { ok: false; errors: string[]; task?: never };

export class TaskService {
  constructor(
    private readonly repository: TaskRepository,
    private readonly generateId: () => string,
    private readonly getCurrentTimestamp: () => string
  ) {}

  async list(): Promise<Task[]> {
    return this.repository.list();
  }

  async create(input: TaskInput): Promise<TaskResult> {
    const validation = validateTaskInput(input);

    if (!validation.valid) {
      return { ok: false, errors: validation.errors };
    }

    const task = createTask(input, this.generateId(), this.getCurrentTimestamp());
    await this.repository.save(task);
    return { ok: true, task };
  }

  async complete(id: string): Promise<TaskResult> {
    const task = await this.repository.findById(id);

    if (!task) {
      return { ok: false, errors: ["Task not found"] };
    }

    const completed = completeTask(task, this.getCurrentTimestamp());
    await this.repository.save(completed);
    return { ok: true, task: completed };
  }
}
