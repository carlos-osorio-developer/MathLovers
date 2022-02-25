import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from '../App';

test('renders Home link', () => {
  render(
    <Router>
      <App />
    </Router>
    );
  const linkElement = screen.getAllByText('Home')[0];
  // test that its href matches the url
  expect(linkElement).toBeInTheDocument();
});

test('Home link has right path', () => {
  render(
    <Router>
      <App />
    </Router>
    );
  const linkElement = screen.getAllByText('Home')[0];
  // test that its href matches the url
  expect(linkElement).toHaveAttribute('href', '/');
});