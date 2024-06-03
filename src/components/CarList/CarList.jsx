import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

// Create const to store car listing
const CarListData = [
  {
    name: "BMW UX",
    price: "150,000",
    mileage: "10,000",
    image: car1,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: "89,000",
    mileage: "55,000",
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Subaru Forester",
    price: "200,000",
    mileage: "100,000",
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem, ipsum color.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          voluptatem iusto debitis officia facere, assumenda inventore enim
          explicabo veritatis aliquam.
        </p>
        {/* Car Listing cards*/}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {CarListData.map((car, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={car.aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary
                p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-8
                    group-hover:sm:translate-x-16 duration-700"
                      src={car.image}
                      alt=""
                    ></img>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{car.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>${car.price}/Day</p>
                      <a href="#">Details</a>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3">
                    {car.mileage}Km
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* End of Car Listing cards */}
        <div className="grid place-content-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
