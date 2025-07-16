import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/SignUp/SignupPage";
import Home from "./pages/Home/Home";
// import ResetPassword from "./pages/ResetPassword";
import AskPage from "./pages/AskPage/Ask";
import StreakPage from "./pages/StreakPage/Streak";
// import Error from "./Pages/Error/Error";
// import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="/streak" element={<StreakPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
