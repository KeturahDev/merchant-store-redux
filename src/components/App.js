import React from 'react';
import './App.css';
// import CategoriesControl from './Categories/CategoriesControl';
import CategoriesControl from "./Categories/CategoriesControl";
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <CategoriesControl/>
    </React.Fragment>
  );
}

export default App;
