import { Link } from "gatsby";
import React from "react";
import Saswata from "/static/img/team/a.jpg";
import Austin from "/static/img/team/b.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Team() {
  return (
    <div className="h-80vh grid grid-cols-1 bg-gray-900 text-white">
      <div className="text-5xl grid justify-center items-center h-15vh">
        Meet our Team
      </div>
      <div className="text-xl grid justify-center items-center h-10vh">
        A world-class team across many disciplines including cryptography,
        distributed computing and cloud infrastructure.
      </div>
      <div className="h-50vh grid grid-cols-4">
        <div className="grid"></div>
        <div className="grid justify-center items-center h-40vh">
          <div className="rounded-lg border-4 border-green-500 border-opacity-75 transform hover:scale-110 motion-reduce:transform-none">
            <a
              href="https://www.linkedin.com/in/saswatabasu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Saswata} style={{ height: "20vh" }} />
            </a>
          </div>
          <div className="text-center text-xl font-bold ">Saswata Basu</div>
          <div className="text-center">Founder</div>
        </div>
        <div className="grid justify-center items-center h-40vh">
          <div className="rounded-lg border-4 border-green-500 border-opacity-75 transform hover:scale-110 motion-reduce:transform-none">
            <a
              href="https://www.linkedin.com/in/saswatabasu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Austin} style={{ height: "20vh" }} />
            </a>
          </div>
          <div className="text-center text-xl font-bold ">Thomas Austin</div>
          <div className="text-center">Co-Founder</div>
        </div>
        <div className="grid"></div>
      </div>
      <div className="grid justify-center items-center h-5vh">
        <Link to="/team">{`See more of our teams >>`}</Link>
      </div>
    </div>
  );
}
