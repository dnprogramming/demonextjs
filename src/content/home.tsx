import Content from "@/interfaces/content";
import DemoContent from "./demoTableData";

const HomeContent: Content = {
    hero: {
        source: "/images/hero_banner.png",
        alt: "Demo Hero Banner",
        width: 1920,
        height: 1080,
        ctaHeading: "Need an application developed?",
        ctaDescription: "An applications can take time and resources to develop but the return on investment can be exponential by having it built by a quality team."
    },
    demoData: DemoContent
}

export default HomeContent;