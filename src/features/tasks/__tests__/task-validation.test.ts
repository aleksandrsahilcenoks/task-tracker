import { describe, expect, it } from "vitest";
import { validateTaskInput } from "../domain/validation";

describe("validateTaskInput", () => {
  it("accepts a valid task title", () => {
    const result = validateTaskInput({ title: "Write project documentation" });

    expect(result).toEqual({ valid: true, errors: [] });
  });

  it("rejects an empty task title", () => {
    const result = validateTaskInput({ title: "   " });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Task title is required");
  });

  it("accepts optional task metadata", () => {
    const result = validateTaskInput({
      title: "Prepare demo",
      description: "Show the Strategy Pattern implementation",
      dueDate: "2025-05-20",
      importance: "high",
      estimatedEffortHours: 4
    });

    expect(result).toEqual({ valid: true, errors: [] });
  });

  it("rejects negative estimated effort", () => {
    const result = validateTaskInput({
      title: "Fix tests",
      estimatedEffortHours: -1
    });

    expect(result.errors).toContain("Estimated effort must be a non-negative number");
  });

  it("rejects invalid importance", () => {
    const result = validateTaskInput({
      title: "Review pull request",
      importance: "critical"
    } as never);

    expect(result.errors).toContain("Importance must be low, medium, or high");
  });
});
