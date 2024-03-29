//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS
import React from 'react';

//IMPORT THE REACT TESTING LIBRARY
import { render, cleanup } from '@testing-library/react';

//IMPORT THE JEST-DOM PACKAGE
import '@testing-library/jest-dom/extend-expect';

//IMPORT THE COMPONENT
import Nav from '..';

//TEST TO HANDLE PROPS FOR THE NAV HERE UNDER THE IMPORT STATEMENTS
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST
afterEach(cleanup);

//CREATE A TEST

describe('Nav component', () => {
    // First Test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH

    });

    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('matches snapshot', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    });

})

//CREATE A TEST WHICH OUTLINES THE ABOVE CHANGES IN NAV INDEX.JS
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

//CREATE VISIBILITY TEST
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            ContactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
     
    });
})

