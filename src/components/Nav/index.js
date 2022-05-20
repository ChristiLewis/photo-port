//THIS NAV RETURNS A SINGLE JSX ELEMENT----> THE HEADER

//PUT THIS INDEX.JS FILE IN SRC/ASSETS/COMPONENTS/NAV TO MAKE A NEW REACT COMPONENT FOR THE NAV SECTION WHICH IS THE HEADER. 1ST=IMPORT 2ND=FUNCTIONS 3RD=EXPORT ----> DON'T FORGET TO USE PASCAL CASING TO SIGNIFY THE REACT COMPONENT

// import React from 'react';
import React, { useState, useEffect } from 'react'
// import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

//WE LIFT THE NAV PROPERTIES VIA PROPS INTO APP.JS TO BE ACCESSED LIKE A PARENT TO OTHER COMPONENT CHILDREN
function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && 'navActive'
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