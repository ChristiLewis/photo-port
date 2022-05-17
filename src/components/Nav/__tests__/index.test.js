//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS
import React from 'react';

//IMPORT THE REACT TESTING LIBRARY
import { render, cleanup } from '@testing-library/react';

//IMPORT THE JEST-DOM PACKAGE
import '@testing-library/jest-dom/extend-expect';

//IMPORT THE COMPONENT
import Nav from '..';

//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST
afterEach(cleanup);

//DECLARE THE COMPONENT BEING TESTED VIA DESCRIBE()
// describe('Nav component', () => {
//     //BASELINE TEST
//     //SNAPSHOT TEST
// })

//CREATE A TEST

describe('Nav component', () => {
    // First Test
    it('renders', () => {
        render(<Nav />);
    });

    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('matches snapshot', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render(<Nav />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    });

})

//EMOJI VISIBILITY TEST PREP 
//         //ARRANGE PARTS OF THE COMPONENT TO ACCESS IE THE HEADER SHOWS SPAN 
//         <header className="flex-row px-1">
//             <h2>
//                 <a href='/'>
//                     <span role="img" aria-label="camera">📸 </span>Oh Snap!
//                 </a>
//             </h2>
//         </header>


//CREATE A TEST WHICH OUTLINES THE ABOVE CHANGES IN NAV INDEX.JS
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

//CREATE VISIBILITY TEST
describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
  
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  
  })