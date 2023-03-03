import React from 'react';
import './App.css';
import Header from './appToDoList/Header';
import SignUp from './sign/Sign-up';
import { Routes, Route} from 'react-router-dom';

function App() { 
  return (
    <div >
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/SignUp" element={<SignUp/>}/>     
      </Routes>
    </div>
  );
}

export default App;
