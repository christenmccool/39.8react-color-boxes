import { render, screen } from '@testing-library/react';
import Box from './Box';

test('if renders without crashing', () => {
  render(<Box />);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
})

