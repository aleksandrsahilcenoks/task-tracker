import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import type { TaskInput } from "../domain/task";

interface TaskFormProps {
  errors: string[];
  onCreate(input: TaskInput): Promise<boolean>;
}

export function TaskForm({ errors, onCreate }: TaskFormProps) {
  const [input, setInput] = useState<TaskInput>({
    title: "",
    description: "",
    dueDate: "",
    importance: "medium",
    estimatedEffortHours: undefined
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const created = await onCreate(input);

    if (created) {
      setInput({
        title: "",
        description: "",
        dueDate: "",
        importance: "medium",
        estimatedEffortHours: undefined
      });
    }
  }

  return (
    <form className="space-y-4 rounded-lg bg-white p-5 shadow-panel" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-medium text-ink" htmlFor="task-title">
          Title
        </label>
        <input
          id="task-title"
          className="mt-1 w-full rounded-md border border-line px-3 py-2 outline-none focus:border-brand"
          value={input.title}
          onChange={(event) => setInput({ ...input, title: event.target.value })}
          placeholder="Write project documentation"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-ink" htmlFor="task-description">
          Description
        </label>
        <textarea
          id="task-description"
          className="mt-1 min-h-20 w-full resize-y rounded-md border border-line px-3 py-2 outline-none focus:border-brand"
          value={input.description}
          onChange={(event) => setInput({ ...input, description: event.target.value })}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <label className="text-sm font-medium text-ink">
          Due date
          <input
            className="mt-1 w-full rounded-md border border-line px-3 py-2 outline-none focus:border-brand"
            type="date"
            value={input.dueDate}
            onChange={(event) => setInput({ ...input, dueDate: event.target.value })}
          />
        </label>

        <label className="text-sm font-medium text-ink">
          Importance
          <select
            className="mt-1 w-full rounded-md border border-line px-3 py-2 outline-none focus:border-brand"
            value={input.importance}
            onChange={(event) =>
              setInput({ ...input, importance: event.target.value as TaskInput["importance"] })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label className="text-sm font-medium text-ink">
          Effort
          <input
            className="mt-1 w-full rounded-md border border-line px-3 py-2 outline-none focus:border-brand"
            min="0"
            step="0.5"
            type="number"
            value={input.estimatedEffortHours ?? ""}
            onChange={(event) =>
              setInput({
                ...input,
                estimatedEffortHours:
                  event.target.value === "" ? undefined : Number(event.target.value)
              })
            }
          />
        </label>
      </div>

      {errors.length > 0 && (
        <div className="rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger">
          {errors.join(". ")}
        </div>
      )}

      <button
        className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-medium text-white hover:bg-blue-700"
        type="submit"
      >
        <Plus aria-hidden="true" size={18} />
        Add task
      </button>
    </form>
  );
}
