import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Menu from "../Pages/Menu";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import About from "../Pages/About";
import Hero from "../Pages/Hero";
import Bot from "../Pages/Bot";
import Skills from "../Pages/Skills";

export default function Layouts() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowScrollToTop(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {showScrollToTop && (
        <div
          className={`fixed bottom-4 sm:right-8 right-4 z-[999] cursor-pointer text-white 
                      text-4xl bg-green-600 w-14 h-14 lg:text-5xl lg:w-20 lg:h-20 items-center justify-center 
                      rounded-full animate-bounce ${showScrollToTop ? "flex" : "hidden"}`}
        >
          <button className="flex items-center justify-center" onClick={handleScrollToTop}>
            <BsFillArrowUpCircleFill />
          </button>
        </div>
      )}
    </div>
  );
};
