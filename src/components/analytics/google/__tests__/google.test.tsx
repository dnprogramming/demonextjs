import { render } from "@testing-library/react";
import Google from "../google";
import React from "react";

describe("Google Component", () => {
    it("renders google analytics component unchanged", () => {
        const { container } = render(<Google />);
        expect(container).toMatchSnapshot();
    });
});