import { useCallback, useEffect, useMemo, useState } from "react";
import type { Task, TaskInput, TaskPriority } from "../domain/task";
import type { TaskPriorityService } from "../services/task-priority-service";
import type { TaskService } from "../services/task-service";

export type TaskFilter = "all" | "active" | "completed";

export interface TaskViewModel extends Task {
  priority: TaskPriority;
}

export function useTaskTracker(
  taskService: TaskService,
  priorityService: TaskPriorityService
) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setTasks(await taskService.list());
    setLoading(false);
  }, [taskService]);

  useEffect(() => {
    void loadTasks();
  }, [loadTasks]);

  const create = useCallback(
    async (input: TaskInput) => {
      const result = await taskService.create(input);

      if (!result.ok) {
        setErrors(result.errors);
        return false;
      }

      setErrors([]);
      await loadTasks();
      return true;
    },
    [loadTasks, taskService]
  );

  const complete = useCallback(
    async (id: string) => {
      const result = await taskService.complete(id);

      if (!result.ok) {
        setErrors(result.errors);
        return false;
      }

      setErrors([]);
      await loadTasks();
      return true;
    },
    [loadTasks, taskService]
  );

  const visibleTasks = useMemo<TaskViewModel[]>(() => {
    const currentDate = new Date();
    return tasks
      .filter((task) => filter === "all" || task.status === filter)
      .map((task) => ({
        ...task,
        priority: priorityService.calculate(task, currentDate)
      }));
  }, [filter, priorityService, tasks]);

  return {
    complete,
    create,
    errors,
    filter,
    loading,
    setFilter,
    tasks,
    visibleTasks
  };
}
