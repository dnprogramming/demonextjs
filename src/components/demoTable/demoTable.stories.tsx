import { Meta, StoryObj } from "@storybook/nextjs";
import DemoTable from "./demoTable";
import DemoContent from "@/content/demoTableData";
import './demoTable.module.css';

const meta: Meta<typeof DemoTable> = {
    title: "Components/DemoTable/DemoTable",
    component: DemoTable,
    parameters: {
        layout: "fullscreen"
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const demoTable: Story = {
    args: {
       demoValues : DemoContent
    },
    render: (args) => <DemoTable {...args} />
};