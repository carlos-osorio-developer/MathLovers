import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders Home link', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const linkElement = screen.getAllByRole('link').find((element) => element.textContent === 'Home');
  expect(linkElement).toBeInTheDocument();
});

test('Home link has right path', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const linkElement = screen.getAllByText('Home')[0];
  // test that its href matches the url
  expect(linkElement).toHaveAttribute('href', '/');
});

test('render calculator if calculator link is clicked', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const linkElement = screen.getAllByRole('link').find((element) => element.textContent === 'Calculator');
  userEvent.click(linkElement);
  expect(screen.getByText("Let's math! =>")).toBeInTheDocument();
});
