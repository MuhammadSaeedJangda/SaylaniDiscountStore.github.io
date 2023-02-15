import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomeScreen from "../src/Welcome/Welcome";
import Signup from "../src/signup/Signup";
import Login from "../src/login/Login";
import Home from "./user/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
