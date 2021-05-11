import React, { useState } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import SearchBox from "../SearchBox";
import { StaticImage } from "gatsby-plugin-image";

//image import
import LogoImageSvg from "./0chainLogoBlack.svg";

// const LogoImage = () => {
//   return (
//     <StaticImage
//       src={LogoImageSvg}
//       alt="0chain logo"
//       placeholder="0chain logo image"
//       width={300}
//       height={150}
//     />
//   );
// };

const NavBar = () => {
  const [active, setActive] = useState(false);

  const toggleNavBar = () => {
    setActive(!active);
  };

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={(data) => (
        <nav className="navbar is-fixed-top" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <StaticImage
                src={LogoImageSvg}
                alt="0chain logo"
                placeholder="0chain logo image"
                width={300}
                height={150}
              />
            </Link>
            <button
              className={`button navbar-burger ${active ? "is-active" : ""}`}
              data-target="navMenu"
              onClick={toggleNavBar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            className={`navbar-menu ${active ? "is-active" : ""}`}
            id="navMenu"
          >
            <div className="navbar-end">
              <SearchBox searchIndex={data.siteSearchIndex.index} />
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/pricing">
                Pricing
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <div>
                <div className="dropdown is-hoverable navbar-item">
                  <Link className="navbar-item" to="/blog">
                    Hover
                  </Link>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                  <div
                    className="dropdown-menu"
                    id="dropdown-menu4"
                    role="menu"
                  >
                    <div className="dropdown-content">
                      <div className="dropdown-item">
                        <p>
                          You can insert <strong>any type of content</strong>{" "}
                          within the dropdown menu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link
                      className="button is-primary is-outlined"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  );
};

export default NavBar;
