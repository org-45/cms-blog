import React from "react";
// import ProgressiveImageContainer from "../ProgressiveImageContainer";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import { Carousel } from "antd";
// import "./Arrow.css";
import zchainLooper from "../../assets/videos/0chain_looper.mp4";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
};

const Win = ({ carouselData }) => {
  console.log(carouselData, "this is our carousel data");

  return (
    <div>
      <Carousel
        autoplay
        arrows={true}
        dots={{
          color: "red",
        }}
        className="bg-gray-900 text-white"
        style={{ height: "80vh" }}
        {...settings}
      >
        <div className="bg-gray-900 ">
          <div className="flex justify-center items-center text-7xl">
            <video
              autoPlay
              loop
              muted
              src={zchainLooper}
              className="h-screen w-screen videoLoop z-10 relative "
              type="video/mp4"
              style={{
                height: "80vh",
                width: "100vw",
                margin: "0 0 0 0",
                padding: "0 0 0 0",
                filter: "grayscale(100%)",
                filter: "opacity(30%)",
              }}
            ></video>
            <div className="justify-center items-center pt-30 z-20 absolute h-50vh w-60vw">
              <div className="p-10 pl-80 static pr-80 flex justify-center text-5xl ">
                {carouselData.frontCarousel.heading}
              </div>
              <div className="w-90 h-90 static p-10 pl-80 pr-80 flex justify-center text-xl">
                {carouselData.frontCarousel.description}
              </div>
              <div className="p-10 flex justify-center text-2xl">
                <button className="border-4 border-green-500 hover:border-yellow-500 p-2 rounded transform motion-safe:hover:scale-110">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {carouselData.offerings.map((data, index) => {
          return <CustomSlide key={index} cData={data} />;
        })}
      </Carousel>
    </div>
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
