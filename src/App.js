//IMPORT ANY NEW COMPONENTS
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import './App.css';
{/*import logo from './logo.svg';*/}

function App() {
  return (
    <div className="App">
      <Nav></Nav>
        <main>
          <About></About>
        </main>
    </div>
  );
}

export default App;
