import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import Nav from '../Nav';
import React from 'react';
afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
})
