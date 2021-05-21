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
        className="bg-black text-white"
        style={{ height: "85vh" }}
        {...settings}
      >
        <div className="bg-black ">
          <div className="flex justify-center items-center text-7xl">
            <video
              autoPlay
              loop
              muted
              src={zchainLooper}
              className="h-screen w-screen videoLoop z-10 relative "
              type="video/mp4"
              style={{
                height: "85vh",
                width: "100vw",
                margin: "0 0 0 0",
                padding: "0 0 0 0",
                filter: "grayscale(100%)",
                filter: "opacity(30%)",
              }}
            ></video>
            <div className="justify-center items-center z-20 absolute h-85vh w-60vw">
              <div className="p-40 static  flex justify-center text-5xl ">
                {carouselData.frontCarousel.heading}
              </div>
              <div className="w-90 h-90 static p-10  flex justify-center text-xl">
                {carouselData.frontCarousel.description}
              </div>
              <div className="p-10 flex justify-center text-2xl">
                <button className="border-4 h-5vh border-green-500 hover:border-yellow-500 p-1 rounded">
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
    <div className="bg-black grid grid-cols-2" style={{ height: "85vh" }}>
      <div className="bg-black flex flex-col justify-center items-start pl-60 ">
        <div className="text-6xl p-10"> {cData.title}</div>
        <div className="text-3xl p-10"> {cData.text}</div>
        <div className="p-10 flex justify-center text-2xl">
          <button className="border-4 h-5vh border-green-500 hover:border-yellow-500 p-1 rounded">
            Explore {cData.title}
          </button>
        </div>
      </div>
      <div className="p-20 flex justify-center items-center">
        {cData.image.extension === "svg" ? (
          <img src={cData.image.publicURL} alt={"carousel alt"} />
        ) : (
          <GatsbyImage image={getImage(cData.image)} alt={"carousel alt"} />
        )}
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
