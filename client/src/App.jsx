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
