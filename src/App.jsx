import { useState } from 'react';
import axios from 'axios';  // Uncommented the import statement
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
// import About from './components/Pages/About';
// import Contact from './components/Pages/Contact'
// import Homes from './components/Pages/Homes'
// import Services from './components/Pages/Services';
import {About,Contact,Homes,ChatBot} from './components/Pages'
function App() {

    

  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About/>} / >
        <Route path="/Contact" element={<Contact/>} / >
        <Route path="/" element={<Homes/>} / >
        <Route path="/ChatBot" element={<ChatBot/>}/>
      </Routes>
      {/* <Card></Card> */}
      
      
    
   </>
  );
}

export default App;
