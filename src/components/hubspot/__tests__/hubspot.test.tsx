import { render } from "@testing-library/react";
import Hubspot from "../hubspot";
import React from "react";

describe("Hubspot Component", () => {
    it("renders Hubspot component unchanged", () => {
        const { container } = render(<Hubspot />);
        expect(container).toMatchSnapshot();
    });
});