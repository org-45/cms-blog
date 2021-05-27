import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import ProductPageTemplate from "../../components/ProductPageTemplate";
// import { StaticImage } from "gatsby-plugin-image";
/* 0box images */
import ZBoxLogo from "/static/img/logo/0Box_logo.png";
import GPlay from "/static/img/logo/google-play-badge.png";
import APlay from "/static/img/logo/appstore-black.svg";
import Anon from "/static/img/0box/anonymous.png";
import AbsPri from "/static/img/0box/absolute-privacy.png";
import TraspData from "/static/img/0box/transparent-data-protection.png";
import PSharing from "/static/img/0stor/features/0stor_private-data-sharing.svg";
import AllocDet from "/static/img/0box/Allocation-Details.png";

const ZBoxPage = ({ data }) => {
  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const ZBoxData = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout>
      <Helmet title={`0Box ||  {title} `} />

      <ProductPageTemplate product={ZBoxData} />

      {/* 0box custom components */}

      <ZBoxCustom />
    </Layout>
  );
};
export default ZBoxPage;

const ZBoxCustom = () => {
  return (
    <div className="grid grid-cols-1 h-auto">
      <div className="grid grid-cols-3 h-30vh">
        <div className="grid justify-center items-center">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={Anon} alt="zbox" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Anonymous</h1>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center items-center">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={AbsPri} alt="zbox" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Absolute Privacy</h1>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center items-center">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={TraspData} alt="zbox" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">High Security</h1>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-black text-white h-95vh">
        <div className="grid ">
          <div className=" grid justify-center self-end  h-20vh text-6xl">
            <span>Simple</span>
            <span className="text-6xl p-1 font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-900">
              Private Sharing
            </span>
          </div>
          <div className="grid justify-center self-start h-10vh">
            Here is a Private sharing description.
          </div>
        </div>
        <div className="grid justify-center items-center">
          <img src={PSharing} alt="sharing" height="400px" width="400px" />
        </div>
      </div>
      <div className="grid grid-cols-2  h-100vh">
        <div className="grid justify-center items-center">1</div>
        <div className="grid justify-center items-center">2</div>
      </div>
      <div className="grid grid-cols-2 bg-black text-white h-95vh">
        <div className="grid ">
          <div className=" grid justify-center self-end  h-20vh text-6xl">
            <span>Continous </span>
            <span className="text-6xl p-1 font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-900">
              Data Protection
            </span>
          </div>
          <div className="grid justify-center self-start h-10vh">
            Breach protection. Continuous unbiased challenges
          </div>
        </div>
        <div className="grid justify-center items-center">
          <img src={AllocDet} alt="sharing" />
        </div>
      </div>
      <div className="grid grid-cols-2 h-100vh">
        <div className="grid justify-center items-center">1</div>
        <div className="grid justify-center items-center">2</div>
      </div>
      <div className="grid grid-cols-2 bg-black text-white h-100vh">
        <div className="grid justify-center items-center">1</div>
        <div className="grid justify-center items-center">2</div>
      </div>
      <div className="grid grid-cols-2  h-100vh">
        <div className="grid justify-center items-center">1</div>
        <div className="grid justify-center items-center">2</div>
      </div>
      <div className="grid grid-cols-2 bg-black text-white h-100vh">
        <div className="grid justify-center items-center">1</div>
        <div className="grid justify-center items-center">2</div>
      </div>
      <div className="grid grid-cols-1 h-auto p-20">
        <div className="grid justify-center items-center h-10vh">
          <img src={ZBoxLogo} alt="0boz logo" />
        </div>
        <div className="grid justify-center items-center h-10vh text-4xl">
          Get started with 0Box for free
        </div>
        <div className="grid grid-cols-3 justify-center items-center h-30vh">
          <div className="grid justify-center items-center">
            <img
              src={GPlay}
              alt="google play"
              height="auto"
              max-width="100px"
            />
          </div>
          <div className="grid justify-center items-center">
            <img src={APlay} alt="app store" height="auto" max-width="100px" />
          </div>
          <div className="grid justify-center items-center">
            <button className="border-2 border-green-500 p-2">
              Try Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ZboxPageQuery = graphql`
  query ZBoxQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(filter: { frontmatter: { title: { eq: "0Box" } } }) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            product_description
            product_yt_link
            product_yt_thumbnail {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  aspectRatio: 1
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
              publicURL
            }
            meta_title
            meta_description
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  quality: 50
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
