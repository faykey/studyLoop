<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
// import Error from "./Pages/Error/Error";
// import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 9e0e1afcdf514ba0d59b335806a871f76c6ef8ce
