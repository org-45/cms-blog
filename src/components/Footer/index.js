import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Field } from "formik";
import FooterNavbar from "../FooterNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import {
  faGithub,
  faTelegram,
  faFacebook,
  faTwitter,
  faReddit,
  faStackOverflow,
  faYoutube,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
      <div className="bg-black h-10vh grid grid-cols-1 justify-center items-center  text-white">
        <div className="grid justify-center items-center text-white px-5">
          {`Get updates from us`}
        </div>

        <div className="grid justify-center items-centerpx-5">
          <form onSubmit={handleFormSubmit}>
            <input
              className="p-1 rounded-full border-green-500 border-2 text-black"
              type="email"
            />

            <button
              className="m-2 border-2 rounded-full p-1 border-green-500"
              type="submit"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black h-30vh grid justify-center items-start">
        <div className="grid grid-cols-5 gap-x-20">
          <div className="grid grid-cols-1 items-start h-25vh">
            <div className=" grid justify-center items-center p-3 h-5vh  font-bold">
              0CHAIN
            </div>
            <Link to="/products/0chain-net">
              <div className=" grid justify-center text-white opacity-50 ">
                0ChainNet
              </div>
            </Link>
            <Link to="/resources/whitepaper">
              <div className=" grid justify-center text-white opacity-50 ">
                Whitepapers
              </div>
            </Link>
            <Link to="/community/zcn">
              <div className=" grid justify-center text-white opacity-50 ">
                ZCN
              </div>
            </Link>

            <Link to="/blog">
              <div className=" grid justify-center text-white opacity-50 ">
                Blog
              </div>
            </Link>

            <Link to="/faq">
              <div className=" grid justify-center text-white opacity-50 ">
                FAQ
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 items-start h-25vh">
            <div className=" grid justify-center items-center p-3 h-5vh  font-bold">
              PRODUCTS
            </div>

            <Link to="/products/0box">
              <div className=" grid justify-center text-white opacity-50 ">
                0Box
              </div>
            </Link>
            <Link to="/products/0Wallet">
              <div className=" grid justify-center text-white opacity-50 ">
                0Wallet
              </div>
            </Link>
            <Link to="/products/0lake">
              <div className=" grid justify-center text-white opacity-50 ">
                0Lake
              </div>
            </Link>
            <Link to="/products/0stor">
              <div className=" grid justify-center text-white opacity-50 ">
                0Stor
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 items-start h-25vh">
            <div className=" grid justify-center h-5vh  items-center p-3 font-bold">
              COMMUNITY
            </div>
            <Link to="/community/be-a-miner">
              <div className=" grid justify-center text-white opacity-50 ">
                Be a miner
              </div>
            </Link>
            <Link to="/community/developer-programs">
              <div className=" grid justify-center text-white opacity-50 ">
                Developer
              </div>
            </Link>
            <Link to="/community/bug-bounty">
              <div className=" grid justify-center text-white opacity-50 ">
                Bug Bounty
              </div>
            </Link>
            <Link to="/community/forum">
              <div className=" grid justify-center text-white opacity-50 ">
                Forum
              </div>
            </Link>
            <Link to="/resources/documentation">
              <div className=" grid justify-center text-white opacity-50 ">
                Documentation
              </div>
            </Link>
            <Link to="/resources/github">
              <div className=" grid justify-center text-white opacity-50 ">
                Github
              </div>
            </Link>
            <Link to="https://documenter.getpostman.com/view/5505940/TzJpgysM">
              <div className=" grid justify-center text-white opacity-50 ">
                API
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 justify-center items-start h-25vh">
            <div className=" grid justify-center h-5vh  items-center p-3 font-black">
              COMPANY
            </div>
            <Link to="/team">
              <div className=" grid justify-center text-white opacity-50 ">
                Team
              </div>
            </Link>
            <Link to="/#solutions">
              <div className=" grid justify-center text-white opacity-50 ">
                Solution
              </div>
            </Link>
            <Link to="/timeline">
              <div className=" grid justify-center text-white opacity-50 ">
                Timeline
              </div>
            </Link>
            <Link to="/blog">
              <div className=" grid justify-center text-white opacity-50 ">
                News
              </div>
            </Link>
            <Link to="https://drive.google.com/drive/folders/135QcA5Yh_WjgjceesKTgGOphkIdsSKmf">
              <div className=" grid justify-center text-white opacity-50 ">
                Media Kit
              </div>
            </Link>
            <Link to="/contact">
              <div className=" grid justify-center text-white opacity-50 ">
                Contact Us
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 ">
            <div className=" grid justify-center items-center">
              <button className="px-2 border-2 rounded-full border-green-500">
                Try Betanet
              </button>
              <button className="px-2 border-2 rounded-full border-green-500">
                Try our Products
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-5vh grid justify-center items-center">
        <div className="grid grid-cols-9 gap-x-10">
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color={"#07db7c"} />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} size="2x" color={"#07db7c"} />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" color={"#07db7c"} />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faReddit} size="2x" color={"#07db7c"} />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} size="2x" color={"#07db7c"} />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" color={"#07db7c"} />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" color={"#07db7c"} />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faStackOverflow}
              size="2x"
              color={"#07db7c"}
            />
          </a>
          <a
            href="https://github.com/0chain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color={"#07db7c"} />
          </a>
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
          <Link to="terms-page">
            <div>Terms</div>
          </Link>
          <Link to="https://blogs.oracle.com/cloud-infrastructure/how-oracle-cloud-customers-can-turn-gdpr-and-ccpa-into-a-business-advantage">
            <div>GDPA/CCPA</div>
          </Link>
          <Link to="/privacy-policy">
            <div>Privacy</div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
