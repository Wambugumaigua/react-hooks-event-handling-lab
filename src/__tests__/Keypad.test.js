import React from 'react';
import { render } from '@testing-library/react'; 
import Keypad from '../components/Keypad';

test('renders the Keypad component without crashing', () => {
  render(<Keypad />);
});
