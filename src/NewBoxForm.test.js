import { render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('if renders without crashing', () => {
  render(<NewBoxForm />);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
})


