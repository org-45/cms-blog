import React from "react";
// import ProgressiveImageContainer from "../ProgressiveImageContainer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Carousel } from "antd";
// import "./Arrow.css";
// import zchainLooper from "../../assets/videos/0chain_looper.mp4";

import useWindowSize from "/screenSize.js";
import { useDeviceDetect } from "/screenSize.js";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
};

const Win = ({ carouselData }) => {
  const { width } = useWindowSize();
  const { isMobile } = useDeviceDetect();

  // console.log(carouselData, "this is our carousel data");

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
        {carouselData.offerings.map((data, index) => {
          return !isMobile || width > 1300 ? (
            <CustomLSlide key={index} cData={data} />
          ) : (
            <CustomMSlide key={index} cData={data} />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Win;

/* Medium Carousel*/
const CustomMSlide = ({ cData }) => {
  // let imageData = getImage(cData.image);

  return (
    <div className="bg-black grid grid-cols-1" style={{ height: "80vh" }}>
      <div className="bg-black flex flex-col justify-center items-center">
        <div className="text-7xl font-black p-5 justify-self-start items-center">
          {" "}
          {cData.title}
        </div>

        {/* instead here we must have a background image with less opacity */}

        {/* <div className="flex justify-center items-center">
          {cData.image.extension === "svg" ? (
            <img src={cData.image.publicURL} alt={"carousel alt"} />
          ) : (
            <GatsbyImage
              image={getImage(cData.image)}
              alt={"carousel alt"}
              className=" rounded-2xl w-max-40"
            />
          )}
        </div> */}
        <div className="text-xl text-center m-3"> {cData.text}</div>
        <div className="flex text-xl m-5">
          <button className="underline bg-green-900 border-green-500 justify-center items-center p-1 font-black text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-900">
            Explore {cData.title}
          </button>
        </div>
      </div>
    </div>
  );
};

/* Larger Carousel */
const CustomLSlide = ({ cData }) => {
  // let imageData = getImage(cData.image);

  return (
    <div className="bg-black grid grid-cols-2" style={{ height: "80vh" }}>
      <div className="bg-black flex flex-col justify-start pt-20 items-start pl-60">
        <div className="text-7xl font-black p-10"> {cData.title}</div>
        <div className="text-3xl p-10"> {cData.text}</div>
        <div className="p-10 flex text-2xl">
          <button className="underline bg-green-900 border-green-500 justify-center items-center p-1 font-black text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-900">
            Explore {cData.title}
          </button>
        </div>
      </div>
      <div className="p-10 flex justify-center items-center">
        {cData.image.extension === "svg" ? (
          <img src={cData.image.publicURL} alt={"carousel alt"} />
        ) : (
          <GatsbyImage
            image={getImage(cData.image)}
            alt={"carousel alt"}
            className=" rounded-2xl"
          />
        )}
      </div>
    </div>
  );
};

/* video carousel */
/* 

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
              <div className="p-40 static  flex justify-center  text-5xl font-black">
                {carouselData.frontCarousel.heading}
              </div>
              <div className="w-90 h-90 static p-10  flex justify-center text-xl">
                {carouselData.frontCarousel.description}
              </div>
              <div className="p-10 flex justify-center text-2xl">
                <button className="border-4 p-2 bg-green-900 border-green-500 justify-center items-center hover:border-yellow-500 p-1 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>


*/
