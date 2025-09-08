import { Meta, StoryObj } from "@storybook/nextjs";
import Header from "./header";
import './header.module.css';

const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header,
    parameters: {
        layout: "fullscreen"
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const header: Story = {
    args: {},
    render: (args) => <Header {...args} />
};