import { Meta, StoryObj } from "@storybook/nextjs";
import Contact from "./contact";
import "./contact.module.css";

const meta: Meta<typeof Contact> = {
    title: "Components/Form/Contact",
    component: Contact,
    parameters: {
        layout: "fullscreen"
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const contact: Story = {
    args: {},
    render: (args) => <Contact {...args} />
};