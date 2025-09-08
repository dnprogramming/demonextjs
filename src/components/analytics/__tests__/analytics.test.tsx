import { render } from "@testing-library/react";
import Analytics from "../analytics";
import React from "react";

describe("Analytics Component", () => {
    it("renders analytics component unchanged", () => {
        const { container } = render(<Analytics />);
        expect(container).toMatchSnapshot();
    });
});