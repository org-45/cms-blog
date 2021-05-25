import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  ResourcesDropDown,
  ProductsDropDown,
  CommunityDropDown,
} from "./DropDowns";
import { useState } from "react";

import useWindowDimensions from "../../utility/screenSize";

export default function Nanbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { height, width } = useWindowDimensions();

  return (
    <div>
      <header>
        <div
          className={
            "bg-black flex xl:flex-col h-10vh " +
            (navbarOpen ? "xl:h-70vh  xl:relative" : "h-10vh")
          }
        >
          <div
            className="xl:absolute xl:top-0 xl:right-0  xl:p-2 xl:m-5 xl:cursor-pointer hover:border-yellow-500  xl:text-white xl:border-4 xl:rounded-3xl xl:border-green-500 "
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            =
          </div>
          <div className="flex w-3/4 xl:w-full xl:justify-start justify-center xl:m-5">
            <Link to="/">
              <LogoNab />
            </Link>
          </div>
          <div className={"" + (navbarOpen ? "" : "hidden")}>
            <div className="flex flex-row  xl:flex-col xl:w-full xl:items-start xl:text-4xl xl:p-10 text-white font-mono text-xl font-light items-center justify-center w-1/2 p-5">
              <div className="hover:text-yellow-500 xl:p-3 p-3">
                <ResourcesDropDown />
              </div>

              <div className="hover:text-yellow-500 xl:p-3 p-3">
                <a href="/blog" className="text-white">
                  Blog
                </a>
              </div>
              <div className="hover:text-yellow-500 xl:p-3 p-3">
                <ProductsDropDown />
              </div>

              <div className="hover:text-yellow-500 xl:p-3 p-3">
                <CommunityDropDown />
              </div>
            </div>

            <div className="flex flex-row xl:w-full xl:p-10  xl:justify-start text-white font-mono text-xl font-light items-center justify-center w-1/4 space-x-4">
              <button className="border-4 border-green-500 hover:border-yellow-500 p-1 rounded-3xl transform motion-safe:hover:scale-110">
                Try Betanet
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

const LogoNab = () => {
  return (
    <StaticImage
      src="./logo-white2x.png"
      quality={90}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="0chain logo"
      style={{
        maxHeight: "60px",
        width: "250px",
        margin: "10px",
        padding: "10px",
      }}
    />
  );
};
