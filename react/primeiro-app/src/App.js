import React from 'react';
import './App.css';

import Header from './componentes/Header/';
import Footer from './componentes/Footer/';
import HomePage from './componentes/HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <HomePage/>
    </div>
  );
}

export default App;