import { render, screen } from "@testing-library/react";
import DemoDetails from "../demoDetails";
import React, { act } from "react";
import DemoContent from "@/content/demoTableData";

describe("DemoDetails Component", () => {
    it("renders DemoDetails description", () => {
        render(<DemoDetails demoData={DemoContent} />);
        const headerElement = screen.getByText(DemoContent[0].description);
        expect(headerElement).toBeInTheDocument();
    });

    it("renders DemoDetails click different demoType", () => {
        render(<DemoDetails demoData={DemoContent} />);
        const buttonToClick = screen.getByText(DemoContent[1].description);
        act(() => {
            buttonToClick.click();
        });
        expect(buttonToClick).toBeInTheDocument();
    });

    it("renders DemoDetails list items", () => {
        render(<DemoDetails demoData={DemoContent} />);
        DemoContent[0].demoData.forEach((demo) => {
                const listItemElement = screen.getByText(demo.description);
                expect(listItemElement).toBeInTheDocument();
        });
    });

    it("renders DemoDetails component unchanged", () => {
        const { container } = render(<DemoDetails demoData={DemoContent} />);
        expect(container).toMatchSnapshot();
    });
});