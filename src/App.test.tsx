import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("creates and displays a task", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Title"), "Write AI-ready requirements");
    await user.click(screen.getByRole("button", { name: /add task/i }));

    expect(await screen.findByText("Write AI-ready requirements")).toBeInTheDocument();
  });

  it("completes a created task", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Title"), "Complete assignment");
    await user.click(screen.getByRole("button", { name: /add task/i }));
    await user.click(await screen.findByRole("button", { name: /^Complete$/ }));

    expect(screen.queryByRole("button", { name: /^Complete$/ })).not.toBeInTheDocument();
  });
});
