import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calendar', () => {
  render(<App />);
  const calendarElement = screen.getByTestId("calendar");
  expect(calendarElement).toBeInTheDocument();
});
