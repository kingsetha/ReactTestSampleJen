import { render, screen } from "@testing-library/react";
import Edit from "../Edit";
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

  test('renders Add orders Name ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("name1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add count ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("id1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add address ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("count1");
    expect(linkElement).toBeInTheDocument();
});
test('renders Add orders Name ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add count ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("id");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add address ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("count");
    expect(linkElement).toBeInTheDocument();
}); 
test('renders Add address ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("update");
    expect(linkElement).toBeInTheDocument();
}); 
test('renders Add address ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("address");
    expect(linkElement).toBeInTheDocument();
}); 
test('renders Add address ', () => {
    render(<Edit />);
    const linkElement = screen.getByRole("address1");
    expect(linkElement).toBeInTheDocument();
}); 