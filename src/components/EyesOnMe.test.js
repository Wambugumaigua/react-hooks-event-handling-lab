import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for toBeInTheDocument matcher
import EyesOnMe from '../components/EyesOnMe';


test('displays the button with the text "Eyes on me"', () => {
  const { getByText } = render(<EyesOnMe />);
  const button = getByText('Eyes on me');
  expect(button).toBeInTheDocument();
});

test('logs "Good!" when the button is focused', () => {
  const spy = jest.spyOn(console, 'log');
  const { getByText } = render(<EyesOnMe />);
  const button = getByText('Eyes on me');
  fireEvent.focus(button);
  expect(spy).toHaveBeenCalledWith('Good!');
});

test('logs "Hey! Eyes on me!" when the button is blurred', () => {
  const spy = jest.spyOn(console, 'log');
  const { getByText } = render(<EyesOnMe />);
  const button = getByText('Eyes on me');
  fireEvent.blur(button);
  expect(spy).toHaveBeenCalledWith('Hey! Eyes on me!');
});
