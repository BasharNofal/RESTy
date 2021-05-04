import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Form from '../Form.js';

describe('==================FORM==================', () => {
    test('Should run the handler on button click', async () => {
      let handler = jest.fn();
      render(<Form prompt="Go" handler={handler} />);
      let button = screen.getByText('Go');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      await waitFor(() => expect(handler).toHaveBeenCalled());
    });
});