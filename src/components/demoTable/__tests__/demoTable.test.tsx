import { render, screen } from "@testing-library/react";
import DemoTable from "../demoTable";
import React from "react";
import DemoContent from "@/content/demoTableData";

describe("DemoTable Component", () => {
    it("renders DemoTable description", () => {
        render(<DemoTable demoValues={DemoContent} />);
        const headerElement = screen.getByText(DemoContent[0].description);
        expect(headerElement).toBeInTheDocument();
    });


    it("renders DemoTable list items", () => {
        render(<DemoTable demoValues={DemoContent} />);
        DemoContent[0].demoData.forEach((demo) => {
                const listItemElement = screen.getByText(demo.description);
                expect(listItemElement).toBeInTheDocument();
        });
    });

    it("renders DemoTable component unchanged", () => {
        const { container } = render(<DemoTable demoValues={DemoContent} />);
        expect(container).toMatchSnapshot();
    });
});