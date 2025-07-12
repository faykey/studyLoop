import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
// import Error from "./Pages/Error/Error";
// import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
       
      <Routes>
        <Route path="/" element={<Landing />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
