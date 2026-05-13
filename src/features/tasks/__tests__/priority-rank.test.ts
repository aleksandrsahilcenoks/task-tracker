import { describe, expect, it } from "vitest";
import { getHighestPriority } from "../domain/priority";

describe("getHighestPriority", () => {
  it("returns the highest priority from a list", () => {
    expect(getHighestPriority(["low", "urgent", "medium"])).toBe("urgent");
  });

  it("returns low priority when the list is empty", () => {
    expect(getHighestPriority([])).toBe("low");
  });
});
