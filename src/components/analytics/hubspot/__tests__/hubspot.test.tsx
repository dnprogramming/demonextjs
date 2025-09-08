import { render } from "@testing-library/react";
import Hubspot from "../hubspot";
import React from "react";

describe("Hubspot Component", () => {
    it("renders hubspot analytics component unchanged", () => {
        const { container } = render(<Hubspot hsAnalytics=""/>);
        expect(container).toMatchSnapshot();
    });
});