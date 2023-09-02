import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NatiqPage from "../Pages/NatiqPage";

describe("NatiqPage", () => {
  test("renders the input and button correctly", () => {
    render(<NatiqPage />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Echo" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("displays error if no text is entered", () => {
    render(<NatiqPage />);
    const button = screen.getByRole("button", { name: "Echo" });

    fireEvent.click(button);

    expect(screen.getByText("Please enter some text.")).toBeInTheDocument();
  });

  test("displays loading indicator while fetching data", async () => {
    render(<NatiqPage />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Echo" });

    fireEvent.change(input, { target: { value: "مرحبا" } });
    fireEvent.click(button);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  test("displays output and audio if request is successful", async () => {
    const mockResponse = {
      wave: "mock-audio-data",
    };
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    });

    render(<NatiqPage />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Echo" });

    fireEvent.change(input, { target: { value: "مرحبا" } });
    fireEvent.click(button);
  });
  test("displays error if request fails", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue(new Error("Mock error"));

    render(<NatiqPage />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Echo" });

    fireEvent.change(input, { target: { value: "مرحبا" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("Error occurred while processing the request.")
      ).toBeInTheDocument();
    });
  });
});
