import { render, screen } from "@testing-library/react";
import Hero from "../hero";
import React from "react";
import HomeContent from "@/content/home";

describe("Hero Component", () => {
    it("renders hero header", () => {
        render(<Hero hero={HomeContent.hero!} />);
        const ctaHeading = screen.getByText(HomeContent.hero!.ctaHeading);
        const ctaDescription = screen.getByText(HomeContent.hero!.ctaDescription);

        expect(ctaHeading).toBeInTheDocument();
        expect(ctaDescription).toBeInTheDocument();
    });

    it("renders hero component unchanged", () => {
        const { container } = render(<Hero hero={HomeContent.hero!}/>);
        expect(container).toMatchSnapshot();
    });
});