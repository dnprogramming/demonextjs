import { Meta, StoryObj } from "@storybook/nextjs";
import DemoCard from "./demoCard";
import DemoContent from "@/content/demoTableData";
import DemoDescription from "@/interfaces/demoDescription";
import "../../demoTable.module.css";
import "../demoDetails.module.css";
import "./demoCard.module.css";

const meta: Meta<typeof DemoCard> = {
    title: "Components/DemoTable/DemoCard",
    component: DemoCard,
    parameters: {
        layout: "fullscreen"
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const demoCard: Story = {
    args: {
        demoData: DemoContent[0].demoData as DemoDescription[]
    },
};

