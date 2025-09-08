import { render, screen } from '@testing-library/react';
import Product from '../product';
import ProductContent from '@/content/product';
import React from 'react';

describe('Product Component', () => {
    it('renders product header', () => {
        render(<Product />);
        const headerElement = screen.getByText(ProductContent.header);
        expect(headerElement).toBeInTheDocument();
    });

    it('renders product statement', () => {
        render(<Product />);
        const statementElement = screen.getByText(ProductContent.statement);
        expect(statementElement).toBeInTheDocument();
    });

    it('renders product tip tagline', () => {
        render(<Product />);
        const tipTaglineElement = screen.getByText(ProductContent.tipTagline);
        expect(tipTaglineElement).toBeInTheDocument();
    });

    it('renders product list items', () => {
        render(<Product />);
        ProductContent.list.forEach((tip) => {
            const listItemElement = screen.getByText(tip);
            expect(listItemElement).toBeInTheDocument();
        });
    });

    it('renders product component unchanged', () => {
        const { container } = render(<Product />);
        expect(container).toMatchSnapshot();
    });
});