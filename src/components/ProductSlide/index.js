import React from "react";
// videos and pngs
import gitPng from "../../assets/images/gh-mobile.png";
import gitVideo from "../../assets/videos/gh-mobile.h264.mp4";

import zchainLooper from "../../assets/videos/0chain_looper.mp4";
import elephantsVid from "../../assets/videos/elephants-dream.webm";
import sampleVideo from "../../assets/videos/github-2.mp4";

import whitePaper from "/static/img/whitepapper_collage.jpg";
import { Link } from "gatsby";
import Solutions from "../Solutions";
export default function ProductSlide() {
  return (
    <div>
      <div className="grid grid-cols-2 h-100vh">
        <div className="grid justify-center items-center m-20 border">
          {""}
          <video
            autoPlay
            loop
            muted
            poster={gitPng}
            src={sampleVideo}
            width={"100%"}
            type="video/mp4"
          ></video>
        </div>
        <div className="grid justify-center items-center m-20  text-5xl">
          <div className="grid">
            Start earning money on our decentralized dStorage network.{" "}
          </div>
          <div className="grid text-xl pb-10">
            Client splits file, sends to Blobbers. They commit markers to
            0ChainNet and get paid through challenges. Reads are paid
            immediately.
          </div>
          <Link to="/">
            <div className="p-10 grid text-green-500 text-2xl p-2 justify-center items-center hover:text-yellow-500 p-1 underline">{`Get started here >>`}</div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 h-95vh bg-black">
        <div className="grid grid-cols-1 justify-center p-20 items-center text-white text-5xl">
          <div className="grid justify-center items-center  text-5xl">
            State of the art protocols leveraging your blockchain based storage
            needs.
          </div>
          <div className="grid justify-center items-center  text-xl">
            0ChainNet is built from scratch with Golang. Fast, secure, scalable
            permissionless blockchain.
          </div>

          <Link to="/">
            <div className="p-10 grid text-green-500 text-2xl p-2 justify-center items-center hover:text-yellow-500 p-1 underline">{`View our Whitepapers >>`}</div>
          </Link>
        </div>
        <div className="grid justify-center items-center h-60 p-20">
          <div className="p-10  flex justify-center items-center">
            <img src={whitePaper} alt="whitepaper"></img>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 h-100vh">
        <div className="grid justify-center items-center  p-20">
          <video
            autoPlay
            loop
            muted
            src={elephantsVid}
            width={800}
            height={600}
            type="video/webm"
          ></video>
        </div>
        <div className="grid justify-center items-center   text-5xl">zcn</div>
      </div>
      <div className="grid h-100vh bg-gray-900 text-white ">
        <div className="text-5xl h-20vh justify-center items-center grid">
          Solutions
        </div>
        <div className=" h-70vh w-full">
          <Solutions />
        </div>
      </div>
      <div className="grid grid-cols-2 h-100vh bg-black">
        <div className="grid justify-center items-center  text-white text-5xl">
          {" "}
          Something 1
        </div>
        <div className="grid justify-center items-center  p-20">
          <video
            autoPlay
            loop
            muted
            src={sampleVideo}
            className="h-screen w-screen"
            type="video/mp4"
          ></video>
        </div>
      </div>
      <div className="grid grid-cols-2 h-100vh">
        <div className="grid justify-center items-center  p-20">
          <video
            autoPlay
            loop
            muted
            src={elephantsVid}
            width={800}
            height={600}
            type="video/webm"
          ></video>
        </div>
        <div className="grid justify-center items-center   text-5xl">
          Something 2
        </div>
      </div>
    </div>
  );
}
