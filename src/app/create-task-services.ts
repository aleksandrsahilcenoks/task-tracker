import { InMemoryTaskRepository } from "../features/tasks/repositories/in-memory-task-repository";
import { LocalStorageTaskRepository } from "../features/tasks/repositories/local-storage-task-repository";
import type { TaskRepository } from "../features/tasks/repositories/task-repository";
import { createDefaultPriorityService } from "../features/tasks/services/default-priority-service";
import { TaskPriorityService } from "../features/tasks/services/task-priority-service";
import { TaskService } from "../features/tasks/services/task-service";

export interface TaskServices {
  taskService: TaskService;
  priorityService: TaskPriorityService;
}

function createRepository(): TaskRepository {
  if (typeof window === "undefined" || !window.localStorage) {
    return new InMemoryTaskRepository();
  }

  return new LocalStorageTaskRepository(window.localStorage);
}

function generateTaskId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `task-${Math.random().toString(36).slice(2)}`;
}

export function createTaskServices(): TaskServices {
  return {
    taskService: new TaskService(
      createRepository(),
      generateTaskId,
      () => new Date().toISOString()
    ),
    priorityService: createDefaultPriorityService()
  };
}
