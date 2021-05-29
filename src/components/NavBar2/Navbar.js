import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import SearchBox from "../SearchBox";

import {
  ResourcesDropDown,
  ProductsDropDown,
  CommunityDropDown,
} from "./DropDowns";
import { useState } from "react";

import useWindowSize from "/screenSize.js";

export default function Nanbar() {
  const { width } = useWindowSize();

  return (
    <div>
      <header>{width > 1300 ? <LNav /> : <MNav />}</header>
    </div>
  );
}

/* width <1300 */
const MNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    console.log(navbarOpen);
  };

  return (
    <div
      className={
        " bg-gray-900 flex flex-col " + (navbarOpen ? "h-70vh" : "h-10vh ")
      }
    >
      <div className="flex flex-row w-full  ">
        <div className="flex m-3 ">
          <Link to="/">
            <LogoNab />
          </Link>
        </div>
        <div className="flex justify-end place-items-end w-full items-center">
          <div
            className="bg-blue-100 cursor-pointer border-2 hover:border-yellow-500 mx-10"
            onClick={handleToggle}
          >
            {"="}
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-col text-white font-mono text-3xl font-light w-full " +
          (navbarOpen ? "" : "hidden")
        }
      >
        <div className="hover:text-yellow-500 p-3">
          <ResourcesDropDown />
        </div>

        <div className="hover:text-yellow-500 p-3">
          <a href="/blog" className="text-white">
            Blog
          </a>
        </div>
        <div className="hover:text-yellow-500 p-3">
          <ProductsDropDown />
        </div>

        <div className="hover:text-yellow-500 p-3">
          <CommunityDropDown />
        </div>

        <div className="flex flex-row text-white font-mono text-xl font-light p-3 w-2/4">
          <button className="border-4 border-green-500 p-2 hover:border-yellow-500  rounded-3xl transform motion-safe:hover:scale-110">
            Try Betanet
          </button>
        </div>
        <div className=" flex p-3">
          {" "}
          <SearchSection />
        </div>
      </div>
    </div>
  );
};

{
  /* width > 1300 */
}
const LNav = () => (
  <div className=" bg-gray-900 flex h-10vh ">
    <div className="flex w-2/5  justify-center">
      <Link to="/">
        <LogoNab />
      </Link>
    </div>

    <div className=" flex justify-center">
      {" "}
      <SearchSection />
    </div>

    <div className="flex flex-row   text-white font-mono text-xl font-light items-center justify-center w-1/2 p-5">
      <div className="hover:text-yellow-500 p-3">
        <ResourcesDropDown />
      </div>

      <div className="hover:text-yellow-500 p-3">
        <a href="/blog" className="text-white">
          Blog
        </a>
      </div>
      <div className="hover:text-yellow-500 p-3">
        <ProductsDropDown />
      </div>

      <div className="hover:text-yellow-500 p-3">
        <CommunityDropDown />
      </div>

      <div className="flex flex-row text-white font-mono text-xl font-light items-center justify-center w-1/4 space-x-4">
        <button className="border-4 border-green-500 hover:border-yellow-500 p-1 rounded-3xl transform motion-safe:hover:scale-110">
          Try Betanet
        </button>
      </div>
    </div>
  </div>
);

const LogoNab = () => {
  return (
    <StaticImage
      src="./logo-white2x.png"
      quality={90}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="0chain logo"
      className="m-3"
    />
  );
};

const SearchSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={(data) => <SearchBox searchIndex={data.siteSearchIndex.index} />}
    />
  );
};
