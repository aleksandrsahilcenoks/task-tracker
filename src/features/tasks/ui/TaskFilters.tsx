import type { TaskFilter } from "./useTaskTracker";

interface TaskFiltersProps {
  activeFilter: TaskFilter;
  onChange(filter: TaskFilter): void;
}

const filters: TaskFilter[] = ["all", "active", "completed"];

export function TaskFilters({ activeFilter, onChange }: TaskFiltersProps) {
  return (
    <div className="inline-flex rounded-md border border-line bg-white p-1">
      {filters.map((filter) => (
        <button
          className={`rounded px-3 py-1.5 text-sm font-medium capitalize ${
            activeFilter === filter
              ? "bg-ink text-white"
              : "text-ink hover:bg-surface"
          }`}
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
