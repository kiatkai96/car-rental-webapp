import React, { useState } from "react";
// Obtained from react-icons webpage
import { IoSunny, IoMoon } from "react-icons/io5";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

// To create the links for the navigation bar for refactoring
const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const togglemenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    // Initially, the theme is assumed to be "light" because there's no code indicating its initial value.
    // The useEffect in App.js will run and set the theme based on the localStorage value or
    // default to "light" if no value is found.

    // The <nav> element in navbar.jsx will have the classes "shadow-md",
    // "bg-white", and possibly "dark:text-white" if the theme is initially set to "dark" or
    // changed to "dark" later.

    // If the theme changes to "dark" during runtime (e.g., user toggles a dark mode switch),
    // the useEffect in App.js will run again, adding the "dark" class to the html element and
    // updating the theme preference in localStorage.

    // As a result of the theme change, the classes applied to the <nav> element in
    // navbar.jsx will update accordingly, potentially adding or removing the "dark:text-white" class.

    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">KK's Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {/* Here we map the Nav links to the above NavLinks so refactoring of code */}
              {Navlinks.map((data) => (
                <li key={data.id} className="py-4">
                  {/* Add the colors when hovering over the menus navigation links */}
                  <a
                    className="py-2 hover:border-b-1 
                    hover:text-primary 
                    hover:border-primary 
                    transition-colors 
                    duration-500 text-md font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* DarkMode Icons */}
              {/* Add the dark mode - day mode button here */}
              <div>
                {/* This code renders an icon based on the value of the theme state variable. 
            If the theme is set to "dark", it renders the sun icon and when clicked it set theme to light mode, 
            otherwise it renders the moon icon and when clicked it sets theme to dark mode */}
                {theme === "dark" ? (
                  <IoSunny
                    onClick={() => setTheme("light")}
                    className="text-2xl"
                  />
                ) : (
                  <IoMoon
                    onClick={() => setTheme("dark")}
                    className="text-2xl"
                  />
                )}
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobil Hamburger Menu */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={togglemenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={togglemenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
          </div>
        </div>
      </div>
      {/* Add the responsive menu here */}
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
