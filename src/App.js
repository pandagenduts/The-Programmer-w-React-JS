import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js'
import Advantages from './components/main/advantages';
import Hero from './components/main/hero';
import OurClients from './components/main/ourClients';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <OurClients />
      <Advantages />
    </>
    
  );
}

export default App;
