//THIS NAV RETURNS A SINGLE JSX ELEMENT----> THE HEADER

//PUT THIS INDEX.JS FILE IN SRC/ASSETS/COMPONENTS/NAV TO MAKE A NEW REACT COMPONENT FOR THE NAV SECTION WHICH IS THE HEADER. 1ST=IMPORT 2ND=FUNCTIONS 3RD=EXPORT ----> DON'T FORGET TO CAPITALIZE THE 'A' IN ABOUT BEC. IT USES PASCAL CASING TO SIGNIFY THE REACT COMPONENT
import React from 'react';

function Nav() {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ];
    const handleClick = (item) => {
        console.log(item);
        return item;
    };

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
                        <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
                            About me
                        </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick('Contact')}>Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;