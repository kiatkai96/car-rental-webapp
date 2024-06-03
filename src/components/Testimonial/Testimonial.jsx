import React from "react";
import { RiStarSFill } from "react-icons/ri";

// Create variable for storing testimonials
const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur!",
    aosDelay: 0,
  },
  {
    name: "Satya",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur!",
    aosDelay: 300,
  },
  {
    name: "Janice",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, consequatur!",
    aosDelay: 1000,
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* Header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text:text-4xl font-serif"
          >
            What Out Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            adipisci pariatur dolorum, voluptates architecto ipsa illum!
            Laudantium laborum dolore voluptates ut placeat ipsum eaque
            accusamus animi. Incidunt quos enim nostrum!
          </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {/* Map the testimonial Data */}
          {testimonialData.map((data) => {
            return (
              <div
                key={data.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 
                bg-gray-100 dark:bg-white/20
                sm:py-12 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  {/* Make the image into a round shape like a profile pic */}
                  <img
                    src="https://picsum.photos/200"
                    alt="h-20 w-20 rounded-full"
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                {/* Flex to make the stars horizontal instead of vertical 
                use justify-center to make the stars align to the center*/}
                <div className="text-2xl flex justify-center items-center">
                  <RiStarSFill style={{ color: "yellow" }} />
                  <RiStarSFill style={{ color: "yellow" }} />
                  <RiStarSFill style={{ color: "yellow" }} />
                  <RiStarSFill style={{ color: "yellow" }} />
                  <RiStarSFill style={{ color: "yellow" }} />
                </div>
                <p>{data.description}</p>
                <p className="font-semibold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
