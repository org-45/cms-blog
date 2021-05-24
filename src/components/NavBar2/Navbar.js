import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  ResourcesDropDown,
  ProductsDropDown,
  CommunityDropDown,
} from "./DropDowns";

export default function Nanbar() {
  const handleMenuToggle = () => {};
  return (
    <div>
      <header>
        <div className="bg-black flex md:flex-col h-10vh md:h-70vh md:relative ">
          <div
            className="md:absolute md:top-0 md:right-0  md:p-20  md:text-white"
            onClick={handleMenuToggle}
          >
            =
          </div>
          <div className="flex w-3/4 md:w-full justify-center md:items-center md:p-10">
            <Link to="/">
              <LogoNab />
            </Link>
          </div>
          <div className="flex flex-row  md:flex-col md:w-full md:text-4xl md:p-10 text-white font-mono text-xl font-light items-center justify-center w-1/2 space-x-6">
            <div className="hover:text-yellow-500 md:p-3">
              <ResourcesDropDown />
            </div>

            <div className="hover:text-yellow-500 md:p-3">
              <a href="/blog" className="text-white">
                Blog
              </a>
            </div>
            <div className="hover:text-yellow-500 md:p-3">
              <ProductsDropDown />
            </div>

            <div className="hover:text-yellow-500 md:p-3">
              <CommunityDropDown />
            </div>
          </div>

          <div className="flex flex-row md:w-full md:p-10 text-white font-mono text-xl font-light items-center justify-center w-1/4 space-x-4">
            <button className="border-4 border-green-500 hover:border-yellow-500 p-1 rounded-3xl transform motion-safe:hover:scale-110">
              Try Betanet
            </button>
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
