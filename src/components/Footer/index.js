import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Field } from "formik";
import FooterNavbar from "../FooterNav";

const Footer = (props) => {
  const { copyright } = props;

  const handleFormSubmit = () => {
    alert("Do you really want to submit?");
  };

  return (
    <footer className="flex flex-col bg-gray-900 h-80vh text-white">
      <div className="bg-black h-15vh grid justify-center items-center">
        <StaticImage
          src="../../assets/images/logo/logo1.png"
          alt="logo for 0chain"
          placeholder="blurred"
          layout="constrained"
          width={100}
          height={100}
        />
      </div>
      <div className="bg-black h-10vh grid grid-cols-1 justify-center items-center text-white">
        <div className="grid justify-center items-center text-white px-5">
          {`Get updates from us`}
        </div>

        <div className="grid justify-center items-centerpx-5">
          <form onSubmit={handleFormSubmit}>
            <input
              className="m-4 p-4"
              type="email"
              className=" text-black "
              text-black
            />

            <button
              className="px-1"
              style={{ border: "1px solid white" }}
              type="submit"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black h-30vh grid justify-center items-center">
        <div className="grid grid-cols-5 gap-x-20 ">
          <div className="grid grid-cols-1">
            <div className=" grid justify-center items-center p-3 font-bold">
              PRODUCTS
            </div>
            <div className=" grid justify-center items-center">0Chain Net</div>
            <div className=" grid justify-center items-center">0Box</div>
            <div className=" grid justify-center items-center">0Wallet</div>
            <div className=" grid justify-center items-center">0Lake</div>
            <div className=" grid justify-center items-center">0Stor</div>
          </div>
          <div className="grid grid-cols-1">
            <div className=" grid justify-center items-center p-3 font-bold">
              PRODUCTS
            </div>
            <div className=" grid justify-center items-center">0Chain Net</div>
            <div className=" grid justify-center items-center">0Box</div>
            <div className=" grid justify-center items-center">0Wallet</div>
            <div className=" grid justify-center items-center">0Lake</div>
            <div className=" grid justify-center items-center">0Stor</div>
          </div>
          <div className="grid grid-cols-1">
            <div className=" grid justify-center items-center p-3 font-bold">
              PRODUCTS
            </div>
            <div className=" grid justify-center items-center">0Chain Net</div>
            <div className=" grid justify-center items-center">0Box</div>
            <div className=" grid justify-center items-center">0Wallet</div>
            <div className=" grid justify-center items-center">0Lake</div>
            <div className=" grid justify-center items-center">0Stor</div>
          </div>
          <div className="grid grid-cols-1">
            <div className=" grid justify-center items-center p-3 font-bold">
              PRODUCTS
            </div>
            <div className=" grid justify-center items-center">0Chain Net</div>
            <div className=" grid justify-center items-center">0Box</div>
            <div className=" grid justify-center items-center">0Wallet</div>
            <div className=" grid justify-center items-center">0Lake</div>
            <div className=" grid justify-center items-center">0Stor</div>
          </div>
          <div className="grid grid-cols-1">
            <div className=" grid justify-center items-center">
              <button className="px-2" style={{ border: "1px solid white" }}>
                Try Betanet
              </button>
              <button className="px-2" style={{ border: "1px solid white" }}>
                Try App
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-5vh grid justify-center items-center">
        <div className="grid grid-cols-8 gap-x-10">
          <div className="grid">facebook</div>
          <div className="grid">youtube</div>
          <div className="grid">3</div>
          <div className="grid">4</div>
          <div className="grid">5</div>
          <div className="grid">3</div>
          <div className="grid">4</div>
          <div className="grid">5</div>
        </div>
      </div>
      <div className="bg-black h-10vh grid justify-center items-center">
        <p>{copyright}</p>
      </div>
      <div className="bg-gray-1600 h-10vh grid justify-center items-center">
        <FooterNavbar />
      </div>
      <div className="bg-black h-5vh grid justify-center items-center">
        <div className="flex flex-row gap-x-5">
          <div>Terms</div>
          <div>GDPA/CCPA</div>
          <div>Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
