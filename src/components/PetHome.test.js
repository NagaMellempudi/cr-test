import React from 'react';
import { render } from '@testing-library/react';
import App from './PetHome';
import PetHome from './PetHome';

test('renders learn react link', () => {
    const { getByText } = render(<PetHome />);
    const linkElement = getByText(/Pet Home/i);
    expect(linkElement).toBeInTheDocument();
});
