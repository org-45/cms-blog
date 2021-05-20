import { Link } from "gatsby";
import React from "react";

export default function Team() {
  return (
    <div className="h-80vh grid grid-cols-1 bg-gray-900 text-white">
      <div className="text-5xl grid justify-center items-center h-20vh">
        Meet our Team
      </div>
      <div className="h-50vh"> h</div>
      <div className="grid justify-center items-center h-10vh">
        <Link to="/team">{`See more of our teams >>`}</Link>
      </div>
    </div>
  );
}
