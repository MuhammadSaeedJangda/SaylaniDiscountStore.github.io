import React from 'react';
import { Router, Route, Routes, } from 'react-router-dom';
import WelcomeScreen from '../src/Welcome/Welcome';
import SignupForm from '../src/signup/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        <Route exact path="/signup" element={<Signup />} >
        </Route> 
        </Routes>
    </Router>
  );
}

export default App;
