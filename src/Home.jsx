import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Hero from "./components/Hero";

export default function Home() {
    return (
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <HireMe/>
            <Projects/>
            <Contact/>
        </div>
    );
}
