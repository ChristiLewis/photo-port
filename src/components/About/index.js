//MAKING A NEW REACT COMPONENT FOR THE ABOUT SECTION 1ST IMPORT 2ND FUNCTIONS 3RD EXPORT
import React from 'react';
//IMPORT ANY IMAGES- ADD THE SRC ATTRIBUTE OF {COVERIMAGE}
import coverImage from "../../assets/cover/cover-image.JPG";


function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>

    );
}

export default About;