import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <PhotoGallery />
            <Footer />
        </>
    );
}

export default App;