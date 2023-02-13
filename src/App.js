import Login from "./login/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Signup from "./signup/Signup";
import WelcomeScreen from "./Welcome/Welcome";
import Home from "./user/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

function App() {
  return (
   <RouterProvider router={router}>
     <div>
      {/* Your components */}
     </div>
   </RouterProvider>
  );
}

export default App;
