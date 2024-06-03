import React from "react";
import {
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

// Create a variable for footer links
const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              optio porro cumque, pariatur atque et!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Ubi Road, Singapore</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+65 6666 5555</p>
            </div>
            {/* Social Media Accounts */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* first col */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        {/* Unicode Character “⮚” (U+2B9A) */}
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Second col */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        {/* Unicode Character “⮚” (U+2B9A) */}
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Third col */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Locations
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        {/* Unicode Character “⮚” (U+2B9A) */}
                        <span className="mr-2">&#11162;</span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
