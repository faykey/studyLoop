import React from 'react'
import Header from "../../Components/LandingPage/Header"
import HeroSection from "../../Components/LandingPage/HeroSection"
import StudyCard from "../../Components/LandingPage/StudyCard"
import StudentsChallenges from "../../Components/LandingPage/StudentsChallenges"
const Home = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <StudyCard />
        <StudentsChallenges />
    </div>
  )
}

export default Home