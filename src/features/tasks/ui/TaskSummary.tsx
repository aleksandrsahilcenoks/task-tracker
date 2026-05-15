import type { TaskViewModel } from "./useTaskTracker";

interface TaskSummaryProps {
  tasks: TaskViewModel[];
}

export function TaskSummary({ tasks }: TaskSummaryProps) {
  const active = tasks.filter((task) => task.status === "active").length;
  const completed = tasks.filter((task) => task.status === "completed").length;
  const focus = tasks.filter(
    (task) => task.status === "active" && ["urgent", "high"].includes(task.priority)
  ).length;

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <SummaryItem label="Active" value={active} />
      <SummaryItem label="Completed" value={completed} />
      <SummaryItem label="Focus" value={focus} />
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-panel">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-ink">{value}</p>
    </div>
  );
}
