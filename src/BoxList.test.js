import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('if renders without crashing', () => {
  render(<BoxList />);
});

test("if matches snapshot", () => {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
})

test("if new box is added", () => {
  const { queryByLabelText, queryByText, debug } = render(<BoxList />);
  
  const color = queryByLabelText("Color");
  const height = queryByLabelText("Height");
  const width = queryByLabelText("Width");
  const button = queryByText("Add box");

  expect(queryByText("X")).not.toBeInTheDocument();

  fireEvent.change(color, { target: { value: 'blue' } });
  fireEvent.change(height, { target: { value: '300' } });
  fireEvent.change(width, { target: { value: '200' } });
  fireEvent.click(button);

  expect(queryByText("X")).toBeInTheDocument();
  expect(queryByText("X").previousSibling).toHaveStyle(`
    width: 200px;
    height: 300px;
    background-color: rgb(0, 0, 0);
  `);
})

test("if box is deleted", () => {
  const { queryByLabelText, queryByText, debug } = render(<BoxList />);
  
  const color = queryByLabelText("Color");
  const height = queryByLabelText("Height");
  const width = queryByLabelText("Width");
  const button = queryByText("Add box");

  expect(queryByText("X")).not.toBeInTheDocument();

  fireEvent.change(color, { target: { value: 'blue' } });
  fireEvent.change(height, { target: { value: '300' } });
  fireEvent.change(width, { target: { value: '200' } });
  fireEvent.click(button);

  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);
  expect(deleteBtn).not.toBeInTheDocument();

})