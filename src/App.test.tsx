import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("All components should be render", () => {
  render(<App />);

  // screen.debug();

  const button = screen.getByText("Auth to spotify");

  
  expect(button).toBeInTheDocument();
});
