import { render, screen } from "@testing-library/react";
import View from "./View";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

jest.mock('axios');
jest.mock('react-router-dom');

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useNavigate: jest.fn(),
//   }));
//   const mock = new MockAdapter(axios);

  test('renders View title ', () => {
    render(<View />);
    const linkElement = screen.getByRole("view-heading");
    expect(linkElement).toBeInTheDocument();
    
});
test('renders View title ', () => {
    render(<View />);
    const linkElement = screen.getByText("Customer's Informations");
    expect(linkElement).toBeInTheDocument();
    
});
test('renders View Content ', () => {
  render(<View />);
  const linkElement = screen.getByText("MOVIE TICKET MANAGEMENT SYSTEM");
  expect(linkElement).toBeInTheDocument();
  
});
// test('renders View update ', () => {
//     render(<View />);
//     const linkElement = screen.getByRole("update");
//     expect(linkElement).toBeInTheDocument();
    
// });