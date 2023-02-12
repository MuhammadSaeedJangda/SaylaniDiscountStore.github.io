import React,{useState} from 'react';
import './Welcome.css';
import SignupForm from '../signup/Signup';

function WelcomeScreen() {
    const handleSignupClick = () => {
        window.open('/signup', '_blank');
      };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img src="../Logo.png" alt="Welcome Image" />
      <h1>SAYLANI WELFARE</h1>
      <p>ONLINE DISCOUNT STORE</p>
      <button onClick={handleSignupClick}>Start Shopping</button>
    </div>
  );
}

export default WelcomeScreen;
