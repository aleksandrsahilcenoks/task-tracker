import { CheckCircle2, Clock3 } from "lucide-react";
import type { TaskPriority } from "../domain/task";
import type { TaskViewModel } from "./useTaskTracker";

interface TaskListProps {
  loading: boolean;
  tasks: TaskViewModel[];
  onComplete(id: string): Promise<boolean>;
}

const priorityClass: Record<TaskPriority, string> = {
  low: "bg-slate-100 text-slate-700",
  medium: "bg-warning/10 text-warning",
  high: "bg-danger/10 text-danger",
  urgent: "bg-red-700 text-white"
};

function formatMetadata(task: TaskViewModel): string {
  const parts = [
    task.dueDate ? `Due ${task.dueDate}` : "No due date",
    `${task.importance} importance`,
    task.estimatedEffortHours !== undefined
      ? `${task.estimatedEffortHours}h effort`
      : "No effort estimate"
  ];

  return parts.join(" · ");
}

export function TaskList({ loading, tasks, onComplete }: TaskListProps) {
  if (loading) {
    return <div className="rounded-lg bg-white p-5 shadow-panel">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-line bg-white p-6 text-center text-sm text-slate-600">
        No tasks match the current filter.
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li className="rounded-lg bg-white p-4 shadow-panel" key={task.id}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-semibold text-ink">{task.title}</h2>
                <span className={`rounded px-2 py-1 text-xs font-semibold ${priorityClass[task.priority]}`}>
                  {task.priority}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600">
                  {task.status === "completed" ? (
                    <CheckCircle2 aria-hidden="true" size={14} />
                  ) : (
                    <Clock3 aria-hidden="true" size={14} />
                  )}
                  {task.status}
                </span>
              </div>
              {task.description && (
                <p className="mt-2 text-sm leading-6 text-slate-700">{task.description}</p>
              )}
              <p className="mt-2 text-xs text-slate-500">{formatMetadata(task)}</p>
            </div>

            {task.status === "active" && (
              <button
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
                type="button"
                onClick={() => void onComplete(task.id)}
              >
                <CheckCircle2 aria-hidden="true" size={16} />
                Complete
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
