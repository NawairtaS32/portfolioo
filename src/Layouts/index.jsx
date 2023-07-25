import React from "react";
import Menu from "../Pages/Menu";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer"
import Contact from "../Pages/Contact"
import Project from "../Pages/Project"
import About from "../Pages/About"
import Hero from "../Pages/Hero"
import Bot from "../Pages/Bot"
import Skills from "../Pages/Skills"


export default function Layouts() {
    return (
        <div>
            <Navbar />
            <Menu />
            <Bot />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};