import { Meta, StoryObj } from "@storybook/nextjs";
import DemoDetails from "./demoDetails";
import DemoContent from "@/content/demoTableData";
import './demoDetails.module.css';
import '../demoTable.module.css';

const meta: Meta<typeof DemoDetails> = {
    title: "Components/DemoTable/DemoDetails",
    component: DemoDetails,
    parameters: {
        layout: "fullscreen"
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const demoDetails: Story = {
    args: {
        demoData: DemoContent
    },
    render: (args) => <DemoDetails {...args} />
};