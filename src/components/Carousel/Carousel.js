import React from "react";
// import ProgressiveImageContainer from "../ProgressiveImageContainer";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import { Carousel } from "antd";

const Win = ({ carouselData }) => {
  console.log(carouselData, "this is our carousel data");

  return (
    <Carousel
      autoplay
      dots={true}
      className="bg-gray-900 text-white"
      style={{ height: "80vh" }}
    >
      <div className="bg-gray-900">
        <div className="p-20 pl-80 pr-80 flex justify-center text-7xl">
          {carouselData.frontCarousel.heading}
        </div>
        <div className="p-10 pl-80 pr-80 flex justify-center text-2xl">
          {carouselData.frontCarousel.description}
        </div>
        <div className="p-10 flex justify-center text-2xl">
          <button className="border-4 border-green-500 hover:border-yellow-500 p-2 rounded transform motion-safe:hover:scale-110">
            Get Started
          </button>
        </div>
      </div>
      {carouselData.offerings.map((data, index) => {
        return <CustomSlide key={index} cData={data} />;
      })}
    </Carousel>
  );
};

export default Win;

const CustomSlide = ({ cData }) => {
  let imageData = getImage(cData.image);
  return (
    <div className="bg-gray-900 grid grid-cols-2" style={{ height: "80vh" }}>
      <div className="bg-gray-900 flex flex-col justify-center items-center ">
        <div className="text-6xl p-20"> {cData.text}</div>
        <div className="p-20 flex justify-center text-2xl">
          <button className="border-4 border-green-500 hover:border-yellow-500 p-2 rounded transform motion-safe:hover:scale-110">
            Try {cData.text}
          </button>
        </div>
      </div>
      <div className="bg-gray-900 flex justify-center items-center">
        <GatsbyImage image={imageData} alt={"carousel alt"} />
      </div>
    </div>
  );
};

{
  /* 

    {/* <div className="bg-yellow-500 p-10 flex flex-row">
        <div className="bg-green-500">3</div>
        <div className="bg-green-900">4</div>
      </div>
      <div className="bg-yellow-500 p-10 flex flex-row">
        <div className="bg-green-500">5</div>
        <div className="bg-green-900">6</div>
      </div> */
}

{
  /*       const imageData = getImage(data.image);

<div className=" flex flex-row bg-gray-200">
              <div className="bg-yellow-900 flex justify-center items-center ">
                {data.text}
              </div>
              <div className="bg-red-300 flex justify-center items-center">
                <GatsbyImage
                  image={imageData}
                  alt={index}
                  style={{ width: "40%", height: "40%" }}
                />
              </div>
            </div> */
}

// hocData.offerings.map((cData, index) => {
//
// });
