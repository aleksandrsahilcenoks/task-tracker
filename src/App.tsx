import { useMemo } from "react";
import { ClipboardList } from "lucide-react";
import { createTaskServices } from "./app/create-task-services";
import { TaskFilters } from "./features/tasks/ui/TaskFilters";
import { TaskForm } from "./features/tasks/ui/TaskForm";
import { TaskList } from "./features/tasks/ui/TaskList";
import { TaskSummary } from "./features/tasks/ui/TaskSummary";
import { useTaskTracker } from "./features/tasks/ui/useTaskTracker";

export function App() {
  const services = useMemo(() => createTaskServices(), []);
  const tracker = useTaskTracker(services.taskService, services.priorityService);

  return (
    <main className="min-h-screen bg-surface px-4 py-6 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(320px,420px)_1fr]">
        <section className="space-y-4">
          <header className="space-y-2">
            <div className="flex items-center gap-2 text-brand">
              <ClipboardList aria-hidden="true" size={28} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Task Tracker
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-ink">Plan focused work</h1>
            <p className="text-sm leading-6 text-slate-600">
              Create tasks, complete them, and let the Strategy Pattern calculate what deserves attention first.
            </p>
          </header>

          <TaskForm errors={tracker.errors} onCreate={tracker.create} />
        </section>

        <section className="space-y-4">
          <TaskSummary tasks={tracker.visibleTasks} />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-ink">Tasks</h2>
            <TaskFilters activeFilter={tracker.filter} onChange={tracker.setFilter} />
          </div>
          <TaskList
            loading={tracker.loading}
            tasks={tracker.visibleTasks}
            onComplete={tracker.complete}
          />
        </section>
      </div>
    </main>
  );
}
