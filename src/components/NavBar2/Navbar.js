import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  ResourcesDropDown,
  ProductsDropDown,
  // SolutionsDropDown,
  CommunityDropDown,
} from "./DropDowns";

export default function Nanbar() {
  return (
    <div>
      <header>
        <div className="bg-black flex flex-row justify-between items-center h-1/4">
          <div className="flex w-3/4 justify-center">
            <Link to="/">
              <LogoNab />
            </Link>
          </div>
          <div className="flex flex-row text-white font-mono text-2xl font-light items-center justify-center w-1/2 space-x-6">
            <div className="hover:text-yellow-500">
              <ResourcesDropDown />
            </div>

            <div className="hover:text-yellow-500">
              <a
                href="/blog"
                // target="_blank"
                // rel="noopener noreferrer"
                style={{ fontStyle: "none" }}
              >
                Blog
              </a>
            </div>
            <div className="hover:text-yellow-500">
              <ProductsDropDown />
            </div>
            {/* <div className="hover:text-yellow-500">
              <SolutionsDropDown />
            </div> */}
            <div className="hover:text-yellow-500">
              <CommunityDropDown />
            </div>
          </div>

          <div className="flex flex-row text-white font-mono text-2xl font-light items-center justify-center w-1/4 space-x-4">
            <button className="border-4 border-green-500 hover:border-yellow-500 p-2 rounded transform motion-safe:hover:scale-110">
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
