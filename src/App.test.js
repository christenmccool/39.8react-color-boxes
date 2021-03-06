import { render, screen } from '@testing-library/react';
import App from './App';

test('if renders without crashing', () => {
  render(<App />);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})