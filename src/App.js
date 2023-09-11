import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Singlepost from "./pages/Singlepost.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/post/:index" element={<Singlepost />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
