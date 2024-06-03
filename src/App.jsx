import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Testimonial from "./components/Testimonial/Testimonial";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  //Dark Mode Feature

  // This code snippet uses React's useState hook to manage a theme state variable.
  // It initializes theme with the value retrieved from localStorage.getItem("theme"),
  // or defaults to "light" if there is no value stored in localStorage for the key "theme".
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  // this code dynamically applies a "dark" theme to the webpage by adding or removing
  // a "dark" class from the html element based on the theme state variable,
  // and it saves the theme preference in localStorage for persistence.
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS initialization for use of animation fading in and out
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <CarList />
      <Testimonial />
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
