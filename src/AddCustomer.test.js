import { render, screen } from "@testing-library/react";
import AddCustomer from "./AddCustomer";
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

  

test('renders Add orders title ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("login-heading");
    expect(linkElement).toBeInTheDocument();
    
});

 
test('renders Add orders Name ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add count ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("count");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add address ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
});
test('renders label orders Name ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("name1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders label count ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("count1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders label address ', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByRole("address1");
    expect(linkElement).toBeInTheDocument();
});
 

test('renders Add customer submit button', () => {
    render(<AddCustomer />);
    const linkElement = screen.getByTestId("submit");
    expect(linkElement).toBeInTheDocument();
});
 
