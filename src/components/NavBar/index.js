// import React, { useState } from "react";
// import { Link, graphql, StaticQuery } from "gatsby";
// import SearchBox from "../SearchBox";
// // import { StaticImage } from "gatsby-plugin-image";

// //image import
// import LogoImageSvg from "./logo-white2x.png";

// const NavBar = () => {
//   const [active, setActive] = useState(false);

//   const toggleNavBar = () => {
//     setActive(!active);
//   };

//   return (
//     <StaticQuery
//       query={graphql`
//         query SearchIndexQuery {
//           siteSearchIndex {
//             index
//           }
//         }
//       `}
//       render={(data) => (
//         <nav
//           className="navbar is-fixed-top is-black"
//           aria-label="main navigation"
//         >
//           <div className="navbar-brand is-one-fifth">
//             <Link to="/" className="navbar-item">
//               <img src={LogoImageSvg} width="300" height="100" alt="logo" />
//             </Link>
//             <button
//               className={`button is-black navbar-burger ${
//                 active ? "is-active" : ""
//               }`}
//               data-target="navMenu"
//               onClick={toggleNavBar}
//             >
//               <span />
//               <span />
//               <span />
//             </button>
//           </div>
//           <div
//             className={`navbar-menu is-black ${active ? "is-active" : ""}`}
//             id="navMenu"
//           >
//             <div className="navbar-end">
//               <SearchBox searchIndex={data.siteSearchIndex.index} />
//               <Link className="navbar-item" to="/about">
//                 About
//               </Link>
//               <Link className="navbar-item" to="/pricing">
//                 Pricing
//               </Link>
//               <Link className="navbar-item" to="/blog">
//                 Blog
//               </Link>
//               <div>
//                 <div className="dropdown is-hoverable navbar-item">
//                   <Link className="navbar-item" to="/blog">
//                     Hover
//                   </Link>
//                   <span className="icon is-small">
//                     <i className="fas fa-angle-down" aria-hidden="true" />
//                   </span>
//                   <div
//                     className="dropdown-menu"
//                     id="dropdown-menu4"
//                     role="menu"
//                   >
//                     <div className="dropdown-content">
//                       <div className="dropdown-item">
//                         <p>
//                           You can insert <strong>any type of content</strong>{" "}
//                           within the dropdown menu.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="navbar-item">
//                 <div className="field is-grouped">
//                   <p className="control">
//                     <Link
//                       className="button is-primary is-outlined"
//                       to="/contact"
//                     >
//                       Contact Us
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       )}
//     />
//   );
// };

// export default NavBar;
