import { render, screen } from "@testing-library/react";
import Social from "../social";
import React from "react";
import SocialContent from "@/content/social";

describe("Social Component", () => {
    it("renders Facebook link", () => {
        render(<Social socials={SocialContent} />);
        const facebookLink = screen.getByRole("link", {
            name: /facebook/i,
        });
        expect(facebookLink).toBeInTheDocument();
    });

    it("renders Instagram link", () => {
        render(<Social socials={SocialContent} />);
        const instagramLink = screen.getByRole("link", {
            name: /instagram/i,
        });
        expect(instagramLink).toBeInTheDocument();
    });

    it("renders social component unchanged", () => {
        const { container } = render(<Social socials={SocialContent} />);
        expect(container).toMatchSnapshot();
    });
});