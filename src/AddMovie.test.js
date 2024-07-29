import { render, screen } from "@testing-library/react";
import AddMovie from "./AddMovie";
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

  

  test('renders Movie title ', () => {
      render(<AddMovie />);
      const linkElement = screen.getByRole("Movie-heading");
      expect(linkElement).toBeInTheDocument();
      
  });
  
   
  test('renders Add orders Name ', () => {
      render(<AddMovie />);
      const linkElement = screen.getByRole("name");
      expect(linkElement).toBeInTheDocument();
  });
   
  test('renders Add count ', () => {
      render(<AddMovie />);
      const linkElement = screen.getByRole("type");
      expect(linkElement).toBeInTheDocument();
  });
   
  test('renders Add address ', () => {
      render(<AddMovie />);
      const linkElement = screen.getByRole("timing");
      expect(linkElement).toBeInTheDocument();
  });
  test('renders label Name ', () => {
    render(<AddMovie />);
    const linkElement = screen.getByRole("name1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders label count ', () => {
    render(<AddMovie />);
    const linkElement = screen.getByRole("type1");
    expect(linkElement).toBeInTheDocument();
});
 
test('renders label address ', () => {
    render(<AddMovie />);
    const linkElement = screen.getByRole("timing1");
    expect(linkElement).toBeInTheDocument();
});
  
  test('renders moviesubmit button', () => {
      render(<AddMovie />);
      const linkElement = screen.getByTestId("submit");
      expect(linkElement).toBeInTheDocument();
  });
   
  