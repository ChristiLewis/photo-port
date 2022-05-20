//IMPORT ANY IMAGES- ADD THE SRC ATTRIBUTE OF {COVERIMAGE}
// import coverImage from "../../assets/cover/cover-image.JPG";
//MAKING A NEW REACT COMPONENT FOR THE GALLERY SECTION 1ST IMPORT 2ND FUNCTIONS 3RD EXPORT
import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description:
      "Photos of grocery stores, food trucks, and other commercial projects",
  };

  //THIS SIMPLE RETURN WORKS
  // return (
  //     <section>
  //       <h1>{currentCategory.name}</h1>
  //       <p>{currentCategory.name}</p>
  //     </section>
  //   );
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        {/*{photo} BREAKS THE CODE {PHOTOLIST DOES NOT-NOW IT WORKS IMPORTING URL TO PIC*/}
        <img
          src={photo}
          alt="Commercial Example"
          className="img-thumbnail mx-1"

        />
      </div>
    </section>
  );
}

export default Gallery;