//THIS NAV RETURNS A SINGLE JSX ELEMENT----> THE HEADER

//PUT THIS INDEX.JS FILE IN SRC/ASSETS/COMPONENTS/NAV TO MAKE A NEW REACT COMPONENT FOR THE NAV SECTION WHICH IS THE HEADER. 1ST=IMPORT 2ND=FUNCTIONS 3RD=EXPORT ----> DON'T FORGET TO USE PASCAL CASING TO SIGNIFY THE REACT COMPONENT

// import React from 'react';
import React, { useState, useEffect } from 'react';
// import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
const [categories] = useState([
  {
    name: 'commercial',
    description: 'Photos of grocery stores, food trucks, and other commercial projects',
  },
  { name: 'portraits', description: 'Portraits of people in my life' },
  { name: 'food', description: 'Delicious delicacies' },
  { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        📸
                    </span>
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    {/*REACT RESPONDS TO THIS.HANDLECLICK - NOT HANDLECLICK ALONE */}
                    <li className={"mx-2"}>
                        <span onClick={() => this.handleClick('Contact')}>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;