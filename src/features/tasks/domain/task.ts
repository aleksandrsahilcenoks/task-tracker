export type TaskStatus = "active" | "completed";

export type TaskImportance = "low" | "medium" | "high";

export type TaskPriority = "low" | "medium" | "high" | "urgent";

export interface TaskInput {
  title: string;
  description?: string;
  dueDate?: string;
  importance?: TaskImportance;
  estimatedEffortHours?: number;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: string;
  importance: TaskImportance;
  estimatedEffortHours?: number;
  createdAt: string;
  completedAt?: string;
}

export interface TaskValidationResult {
  valid: boolean;
  errors: string[];
}
