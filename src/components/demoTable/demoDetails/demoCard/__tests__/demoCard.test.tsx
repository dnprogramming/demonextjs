import { render, screen } from "@testing-library/react";
import DemoCard from "../demoCard";
import React from "react";
import DemoContent from "@/content/demoTableData";

describe("DemoCard Component", () => {
    it("renders DemoCard description", () => {
        render(<DemoCard demoData={DemoContent[0].demoData} />);
        const headerElement = screen.getByText(DemoContent[0].demoData[0].description);
        expect(headerElement).toBeInTheDocument();
    });


    it("renders DemoCard list items", () => {
        render(<DemoCard demoData={DemoContent[0].demoData} />);
        DemoContent[0].demoData.forEach((demoInfo) => {
                const listItemElement = screen.getByText(demoInfo.description);
                expect(listItemElement).toBeInTheDocument();
        });
    });

    it("renders DemoCard component unchanged", () => {
        const { container } = render(<DemoCard demoData={DemoContent[0].demoData} />);
        expect(container).toMatchSnapshot();
    });
});