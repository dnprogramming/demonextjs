import { Meta, StoryObj } from '@storybook/nextjs';
import Navbar from './navbar';
import './navbar.module.css';

const meta: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const navbar: Story = {
    args: {},
    render: (args) => <Navbar {...args} />,
};