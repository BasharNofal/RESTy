import { render, screen } from '@testing-library/react';
import App from '../App.js';
// console.log(1);
describe('==============APP==============', () => {
    
    it('Should render Go button', () => {
      render(<App />);
      const button = screen.getByText(/Go/i);
      // console.log(button);
      expect(button).toBeInTheDocument();
    });
});