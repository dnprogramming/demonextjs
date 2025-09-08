import { Meta, StoryObj } from "@storybook/nextjs";
import Gallery from "./gallery";
import GalleryContent from "@/content/gallery";
import './gallery.module.css';

const meta: Meta<typeof Gallery> = {
    title: "Components/Gallery",
    component: Gallery,
    parameters: {
        layout: "fullscreen"
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const gallery: Story = {
    args: {
        images: GalleryContent
    },
    render: (args) => <Gallery {...args} />
};