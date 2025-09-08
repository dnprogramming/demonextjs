import { render } from "@testing-library/react";
import Modal from "../modal";
import React from "react";
import GalleryContent from "@/content/gallery";

describe("Modal Component", () => {
    it ("renders modal with image", () => {
        const { getByAltText } = render(
            <Modal imageUrl={GalleryContent[0]} onClose={jest.fn()} />
        );
        const imageElement = getByAltText("Demo Next.JS Modal Image");
        expect(imageElement).toBeInTheDocument();
    });

    it("renders modal with close button", () => {
        const { getByText } = render(
            <Modal imageUrl={GalleryContent[0]} onClose={jest.fn()} />
        );
        const closeButton = getByText("×");
        expect(closeButton).toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
        const onCloseMock = jest.fn();
        const { getByText } = render(
            <Modal imageUrl={GalleryContent[0]} onClose={onCloseMock} />
        );
        const closeButton = getByText("×");
        closeButton.click();
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it("imageUrl is empty", () => {
        const onCloseMock = jest.fn();
        const { container } = render(
            <Modal imageUrl="" onClose={onCloseMock} />
        );
        expect(container).toBeInTheDocument();
    });

    it("renders modal component unchanged", () => {
        const { container } = render(<Modal imageUrl={GalleryContent[0]} onClose={jest.fn()} />);
        expect(container).toMatchSnapshot();
    });
});
