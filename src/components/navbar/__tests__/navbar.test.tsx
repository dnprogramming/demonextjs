import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from '../navbar';

describe('Page', () => {
    it('renders links', () => {
        render(<Navbar />);

        const homeLink = screen.getByText(/home/i);
        const aboutLink = screen.getByText(/about/i);
        const contactLink = screen.getByText(/contact/i);
        const galleryLink = screen.getByText(/gallery/i);
        const fundraisersLink = screen.getByText(/fundraisers/i);
        const shopLink = screen.getByText(/shop/i);

        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
        expect(galleryLink).toBeInTheDocument();
        expect(fundraisersLink).toBeInTheDocument();
        expect(shopLink).toBeInTheDocument();
    });

    it('renders hamburger menu', () => {
        render(<Navbar />);
    
        const hamburgerMenu = screen.getByText(/☰/i);
        expect(hamburgerMenu).toBeInTheDocument();
    });

    it('toggles menu on click', () => {
        render(<Navbar />);
    
        const hamburgerMenu = screen.getByText(/☰/i);
        const linksContainer = screen.getByText(/home/i).closest('div');
    
        expect(linksContainer).not.toHaveClass('open');
    
        fireEvent.click(hamburgerMenu);
    
        expect(linksContainer).toHaveClass('open');
    
        fireEvent.click(hamburgerMenu);
    
        expect(linksContainer).not.toHaveClass('open');
    });

  it('renders homepage unchanged', () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})