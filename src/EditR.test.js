import { render, screen } from "@testing-library/react";
import EditR from "./EditR";
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
    render(<EditR />);
    const linkElement = screen.getByRole("name1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add count ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("id1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add address ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("type1");
    expect(linkElement).toBeInTheDocument();
});
test('renders Add orders Name ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("name");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add count ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("id");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders Add address ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("type");
    expect(linkElement).toBeInTheDocument();
}); 
test('renders Add address ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("update");
    expect(linkElement).toBeInTheDocument();
}); 
test('renders Add address ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("timing");
    expect(linkElement).toBeInTheDocument();
}); 
test('renders Add address ', () => {
    render(<EditR />);
    const linkElement = screen.getByRole("time1");
    expect(linkElement).toBeInTheDocument();
}); 