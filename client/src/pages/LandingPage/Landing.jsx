import React from 'react'
import Header from "../../Components/LandingPage/Header"
import HeroSection from "../../Components/LandingPage/HeroSection"
import StudyCard from "../../Components/LandingPage/StudyCard"
import StudentsChallenges from "../../Components/LandingPage/StudentsChallenges"
import SuccessFeatures from "../../Components/LandingPage/SuccessFeatures"
import Testimonials from "../../Components/LandingPage/Testimonials"
import HowItWorks from "../../Components/LandingPage/HowItWorks"
import WaitlistCard from "../../Components/LandingPage/WaitlistCard"
const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <StudyCard />
        <StudentsChallenges />
        <SuccessFeatures />
        <Testimonials />
        <HowItWorks />
        <WaitlistCard />
    </div>
  )
}

export default Home