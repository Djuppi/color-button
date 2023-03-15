import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
    render(<App />);

    // find an element with a role of button and text of 'Change to blue
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    expect(colorButton).toHaveStyle({backgroundColor: 'red'});
    
});

test('buttons turns blue when clicked', () => {
    render(<App />);

    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    expect(colorButton).toHaveStyle({backgroundColor: 'red'});

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

    expect(colorButton).toHaveTextContent('Change to red');

});
 