import { render } from "@testing-library/react";
import Vercel from "../vercel";
import React from "react";

describe("Vercel Component", () => {
    it("renders vercel analytics component unchanged", () => {
        const { container } = render(<Vercel />);
        expect(container).toMatchSnapshot();
    });
});