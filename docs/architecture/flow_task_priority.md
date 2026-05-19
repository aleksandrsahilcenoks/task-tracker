# Flow: Task Priority Calculation

This Mermaid flowchart documents the selected MVP feature from `docs/requirements/feature_task_priority.md`.

```mermaid
flowchart TD
    Start([Start]) --> ReceiveTask[Receive Task and injected currentDate]
    ReceiveTask --> HasDueDate{Task has dueDate?}
    HasDueDate -- Yes --> DeadlineStrategy[DeadlinePriorityStrategy calculates deadline priority]
    HasDueDate -- No --> DeadlineLow[Deadline strategy returns low]
    DeadlineStrategy --> ImportanceStrategy[ImportancePriorityStrategy maps explicit importance]
    DeadlineLow --> ImportanceStrategy
    ImportanceStrategy --> EffortStrategy[EffortPriorityStrategy maps estimated effort]
    EffortStrategy --> Composite[CompositePriorityStrategy compares strategy outputs]
    Composite --> Highest[Return highest priority]
    Highest --> End([End])
```

## Architectural Notes

- `currentDate` is injected by the caller.
- Deadline, importance, and effort algorithms are separate strategies.
- The composite strategy combines strategy outputs and returns the highest priority.
- React components do not implement or duplicate the priority rules.
