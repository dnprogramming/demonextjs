import { Meta, StoryObj } from "@storybook/nextjs";
import Hero from "./hero";
import HeroContent from "@/content/home";
import './hero.module.css';

const meta: Meta<typeof Hero> = {
    title: "Components/Hero",
    component: Hero,
    parameters: {
        layout: "fullscreen"
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const hero: Story = {
    args: {
        hero: HeroContent.hero
    },
    render: (args) => <Hero {...args} />
};