import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Field } from "formik";

const Footer = (props) => {
  const { copyright } = props;

  return (
    <footer className="flex flex-col bg-gray-900 h-90vh">
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
      <div className="bg-black h-5vh flex flex-row justify-center items-center text-white">
        <div className="grid justify-center items-center text-white px-5">
          {`Get updates from us`}
        </div>

        <div className="grid justify-center items-center text-white px-5">
          <form>
            <input className="mx-2" />

            <button className="px-2" style={{ border: "1px solid white" }}>
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <div className="bg-yellow-600 h-30vh grid justify-center items-center">
        Main
      </div>
      <div className="bg-green-600 h-10vh grid justify-center items-center">
        Socials
      </div>
      <div className="bg-blue-600 h-10vh grid justify-center items-center">
        <p>{copyright}</p>
        <p>
          <a href="https://github.com/0chain">0chain</a>
        </p>
        t
      </div>
      <div className="bg-gray-600 h-10vh grid justify-center items-center">
        Blog Dropdowns
      </div>
      <div className="bg-yellow-400 h-5vh grid justify-center items-center">
        <div className="">Terms</div>
      </div>
    </footer>
  );
};

export default Footer;
