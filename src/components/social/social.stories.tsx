import { Meta, StoryObj } from '@storybook/nextjs';
import Social from './social';

const meta: Meta<typeof Social> = {
    title: 'Components/Social',
    component: Social,
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const social: Story = {
    args: {},
    render: (args) => <Social {...args} />,
};