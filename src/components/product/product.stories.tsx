import { Meta, StoryObj } from '@storybook/nextjs';
import Product from './product';
import ProductContent from '@/content/product';
import './product.module.css';

const meta: Meta<typeof Product> = {
    title: 'Components/Product',
    component: Product,
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;

type Story = StoryObj<typeof meta>;
export const product: Story = {
    args: {
        product: ProductContent,
    },
    render: (args) => <Product {...args} />,
};