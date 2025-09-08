import { render, screen } from "@testing-library/react";
import Footer from "../footer";
import React from "react";

describe("Footer Component", () => {
    it("renders footer with correct title", () => {
        render(<Footer />);
        const titleElement = screen.getByText(/Demo Next.JS/i);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders footer with correct description", () => {
        render(<Footer />);
        const descriptionElement = screen.getByText(
            /All rights reserved./i
        );
        expect(descriptionElement).toBeInTheDocument();
    });

    it("renders footer component unchanged", () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});