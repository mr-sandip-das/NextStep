import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Feedback from "../components/Feedback.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <div>

            <Navbar />

            <Hero />
            <Feedback />

            <Footer />

        </div>
    )
}

export default Home
