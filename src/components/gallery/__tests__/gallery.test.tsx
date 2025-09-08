import { act, render } from "@testing-library/react";
import Gallery from "../gallery";
import React from "react";
import GalleryContent from "@/content/gallery";

describe("Gallery Component", () => {
    it("renders gallery with images", () => {
        const { getByAltText } = render(<Gallery images={GalleryContent} />);
        const imageElement = getByAltText(GalleryContent[0]);
        expect(imageElement).toBeInTheDocument();
    });

    it("renders gallery with click event", () => {
        const { getByAltText } = render(<Gallery images={GalleryContent} />);
        const imageElement = getByAltText(GalleryContent[0]);
        act(() => {
            imageElement.click();
        });
        expect(imageElement).toBeInTheDocument();
    });

    it("opens and closes modal", () => {
        const { getByAltText, getByText } = render(<Gallery images={GalleryContent} />);
        const imageElement = getByAltText(GalleryContent[0]);
        act(() => {
            imageElement.click();
        });
        const closeButton = getByText("×");
        act(() => {
            closeButton.click();
        });
        expect(imageElement).toBeInTheDocument();
    });

    it("renders gallery component unchanged", () => {
        const { container } = render(<Gallery images={GalleryContent}/>);
        expect(container).toMatchSnapshot();
    });
});