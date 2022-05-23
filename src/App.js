//IMPORT ANY NEW COMPONENTS
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import './App.css';
//import logo from './logo.svg';

function App() {
  //MAINTAIN THE STATE (NO CONTACTFORM VISIBLE AT FIRST) VIA USESTATE HOOK
  const [contactSelected, setContactSelected] = useState(false);
  //CATEGORIES BECOMES IDENTIFIED AS AN ARRAY AND MOVED FROM NAV TO APP
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    {
      name: "portraits",
      description:
        "Portraits of people in my life"
    },
    {
      name: "food",
      description:
        "Delicious delicacies"
    },
    {
      name: "landscape",
      description:
        "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    //INVOKE EACH COMPONENT'S FUNCTION BY CALLING IT IN THE APP.JS RETURN STATEMENT VIS A VIS <COMPONENTFUNCTIONNAME/>
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory} />
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

export default App;
