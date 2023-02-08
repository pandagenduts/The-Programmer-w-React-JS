import { useState } from 'react';
import './App.css';
import Header from './components/header.js'

function App() {
  const [yanto, setYanto] = useState('halo, nama saya YANTO')

  return (
    <>
      <h1>{yanto}</h1>
      <Header name="yantoo"/>
      
    </>
    
  );
}

export default App;
