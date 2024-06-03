import React from "react";
import carPng from "../../assets/car.png";
import yellowCarPng from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  return (
    // The -z-20 class likely sets a z-index of -20, which means the element will be
    // behind elements with a higher z-index value and in front of elements with a lower z-index value,
    // provided they are also positioned elements.
    <div className="dark:bg-black dark:text-white duration-300 relative">
      <div className="container min-h-[620px] flex">
        {/* For screens larger than or equal to the small breakpoint (sm), it will have 2 columns. 
        For screens smaller than the small breakpoint, it will have 1 column */}
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          {/* Add the aos animation here zoom in the picture when refreshed */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            {/* Since the img here has relative z-index value: -10, is higher than the dark background above
            it will be in front of the dark background  */}
            <img
              // If white theme then show yellow car else if dark theme show dark car
              src={theme === "dark" ? carPng : yellowCarPng}
              alt=""
              className="relative -z-20 max-h-[500px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          {/* Set the space between items vertically to 5: space-y-5 */}
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            {/* add the animation for the paragraph */}
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-primary text-2xl font-serif"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              obcaecati tempore fugit. Voluptates alias iure pariatur
              dignissimos nesciunt laborum officiis dicta.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className="btn bg-primary text-black 
            px-6 py-2 rounded-md 
            hover:bg-primary/80 
            duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
