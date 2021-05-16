import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  Miners,
  Blobbers,
  Sharders,
  ZCN,
  ZBox,
  Hash,
  Blockchain,
} from "./DropDowns";

export default function Nanbar() {
  return (
    <div>
      <header>
        <div className="justify-between items-center">
          <div className="flex flex-row text-white font-mono font-light items-center justify-center  space-x-6">
            <div className="hover:text-yellow-500">
              <Miners />
            </div>
            <div className="hover:text-yellow-500">
              <Blobbers />
            </div>
            <div className="hover:text-yellow-500">
              <Sharders />
            </div>
            <div className="hover:text-yellow-500">
              <ZCN />
            </div>
            <div className="hover:text-yellow-500">
              <ZBox />
            </div>
            <div className="hover:text-yellow-500">
              <Hash />
            </div>
            <div className="hover:text-yellow-500">
              <Blockchain />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
