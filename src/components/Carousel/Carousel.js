import React from "react";
// import ProgressiveImageContainer from "../ProgressiveImageContainer";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import { Carousel } from "antd";

const Win = ({ carouselData }) => {
  console.log(carouselData.frontCarousel.heading, "this is our carousel data");

  return (
    <div>
      <Carousel autoplay className="bg-black text-white">
        <div>
          <span>{carouselData.frontCarousel.heading}</span>
          <p>{carouselData.frontCarousel.description}</p>
        </div>
        {carouselData.offerings.map((data, index) => {
          const imageData = getImage(data.image);
          return (
            <div>
              <div>{data.text}</div>
              <GatsbyImage image={imageData} alt={index} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Win;
