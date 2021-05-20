import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Marquee from "react-fast-marquee";

export default function Partners({ partnersData }) {
  console.log(partnersData[0].partner_logo, "partners logo");
  return (
    <div className="p-10 bg-gray-900 h-50 justify-self-center ">
      {/* <h1 className="text-5xl p-20">Partners</h1> */}
      <Marquee speed={60} gradientColor={"#818181"}>
        {partnersData.map((pData, index) => {
          const PartnerImage = getImage(
            pData.partner_logo.childrenImageSharp[0]
          );

          return (
            <div className="m-2  object-none h-30 w-full">
              <GatsbyImage image={PartnerImage} alt={"some partners"} />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
