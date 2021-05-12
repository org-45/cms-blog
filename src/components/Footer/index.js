import React from "react";

const Footer = (props) => {
  const { copyright } = props;

  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>{copyright}</p>
          <p>
            <a href="https://github.com/0chain">0chain</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
