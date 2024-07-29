import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// jest.mock('axios');
// jest.mock('react-router-dom');

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
  const mock = new MockAdapter(axios);

  test('renders View title ', () => {
    render(<Home />);
    const linkElement = screen.getByText("Customer Satisfaction is the ultimate goal our theatre!");
    expect(linkElement).toBeInTheDocument();
    
});
test('renders Home title ', () => {
    render(<Home />);
    const linkElement = screen.getByText("Better Sound");
    expect(linkElement).toBeInTheDocument();
    
});
test('renders home content ', () => {
    render(<Home />);
    const linkElement = screen.getByText("Unlimited Popcorn");
    expect(linkElement).toBeInTheDocument();
    
});