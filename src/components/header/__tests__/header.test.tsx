import { render, screen } from "@testing-library/react";
import Header from "../header";
import React from "react";

describe("Header Component", () => {
    jest.spyOn(console, "warn").mockImplementation(() => {});

    it("renders header with correct title", () => {
        render(<Header />);
        const titleElement = screen.getByAltText(/Demo Next.js Logo/i);
        expect(titleElement).toBeInTheDocument();
    });

    it("snapshots header component", () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});