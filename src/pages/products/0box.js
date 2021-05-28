import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import ProductPageTemplate from "../../components/ProductPageTemplate";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import useWindowSize from "/screenSize.js";

/* 0box images */
import ZBoxLogo from "/static/img/logo/0Box_logo.png";
import GPlay from "/static/img/logo/google-play-badge.png";
import APlay from "/static/img/logo/appstore-black.svg";
import Anon from "/static/img/0box/anonymous.png";
import AbsPri from "/static/img/0box/absolute-privacy.png";
import TraspData from "/static/img/0box/transparent-data-protection.png";
import PSharing from "/static/img/0stor/features/0stor_private-data-sharing.svg";
import AllocDet from "/static/img/0box/Allocation-Details.png";

import EnjAnon from "/static/img/0box/File.png";

import Transparency from "/static/img/0box/transparency.png";

const ZBoxPage = ({ data }) => {
  const { width } = useWindowSize();

  const title = data.site.siteMetadata.title;
  const ZBoxData = data.allMarkdownRemark.edges[0].node.frontmatter;
  const ZBoxUpd = data.allMarkdownRemark.edges[0].node.frontmatter.updates.slice(
    0,
    9
  );

  return (
    <Layout>
      <Helmet title={`0Box ||  {title} `} />

      <ProductPageTemplate product={ZBoxData} />

      {width > 1300 ? (
        <ZBoxCustom updates={ZBoxUpd} />
      ) : (
        <MZBoxCustom updates={ZBoxUpd} />
      )}
    </Layout>
  );
};
export default ZBoxPage;

const MZBoxCustom = ({ updates }) => {
  return (
    <div className="grid grid-cols-1 h-auto">
      <div className="grid grid-cols-1 h-auto justify-center items-center">
        <div className="grid justify-center h-40vh items-center p-5">
          <h1 className="grid text-4xl h-5vh text-center">Anonymous</h1>
          <div className="grid h-auto justify-center items-center w-15vw">
            <img src={Anon} alt="zbox" />
          </div>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center h-40vh items-center p-5">
          <h1 className="grid text-4xl h-5vh text-center">Absolute Privacy</h1>
          <div className="grid h-auto justify-center items-center w-15vw">
            <img src={AbsPri} alt="zbox" />
          </div>
          <p className="grid text-center h-auto">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center h-40vh items-center p-5">
          <h1 className="grid text-4xl h-5vh text-center">High Security</h1>
          <div className="grid h-auto justify-center items-center w-15vw">
            <img src={TraspData} alt="zbox" />
          </div>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center h-40vh items-center p-5">
          <h1 className="grid text-4xl h-5vh text-center">
            Simple Private Sharing
          </h1>
          <div className="grid h-auto justify-center items-center w-15vw">
            <img src={PSharing} alt="zbox" height="auto" width="150px" />
          </div>
          <p className="grid text-center h-5vh">P2P data sharing.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-black text-white h-100vh">
        <div className="grid justify-center items-center h-50vh">
          <img src={AllocDet} alt="sharing" />
        </div>
        <div className="grid h-50vh">
          <div className=" grid justify-center item-center  h-30vh text-6xl p-10">
            Continous
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-900">
              Data Protection
            </span>
          </div>
          <div className="grid justify-center self-start h-20vh">
            Breach protection. Continuous unbiased challenges
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 h-100vh">
        <div className="grid justify-center items-center h-50vh">
          <img src={EnjAnon} alt="sharing" />
        </div>

        <div className="grid h-50vh">
          <div className=" grid justify-center item-center  h-30vh text-6xl p-10">
            Enjoy
            <span className="text-6xl p-1 font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-900">
              Anonymity
            </span>
          </div>
          <div className="grid justify-center self-start h-20vh">
            Share files securely with people
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-black text-white h-100vh">
        <div className="grid justify-center items-center h-70vh p-10">
          <img src={Transparency} alt="sharing" width="200px" height="auto" />
        </div>
        <div className="grid h-30vh">
          <div className=" grid justify-center item-center  h-20vh  p-2">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-900">
              Transparency
            </span>
          </div>
          <div className="grid justify-center self-start h-10vh">
            Upload files and monitor servers and challenges
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 h-100vh">
        <div className=" grid  justify-center items-center h-20vh">
          <div className="text-5xl">Case Studies</div>
        </div>
        <div className="grid h-80vh">
          <UseCasesTabs />
        </div>
      </div>

      <div className="grid grid-cols-1 bg-gray-900 text-white h-auto">
        <div className=" grid  justify-center items-center h-20vh">
          <div className="text-3xl">News and Updates</div>
        </div>
        <div className="grid h-auto">
          <ZBoxUpdates updates={updates} />
        </div>
      </div>

      <div className="grid grid-cols-1 h-auto p-5">
        <div className="grid justify-center items-center h-10vh">
          <img src={ZBoxLogo} alt="0boz logo" />
        </div>
        <div className="grid justify-center items-center h-20vh text-center p-5 text-3xl">
          Get started with 0Box for free
        </div>
        <div className="grid grid-cols-1 justify-center items-center h-auto">
          <div className="grid justify-center items-center p-5">
            <img src={GPlay} alt="google play" height="70px" width="200px" />
          </div>
          <div className="grid justify-center items-center p-5">
            <img src={APlay} alt="app store" height="70px" width="200px" />
          </div>
          <div className="grid justify-center items-center p-5">
            <button className="border-2 border-green-500 p-2">
              Try Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ZBoxCustom = ({ updates }) => {
  return (
    <div className="grid grid-cols-1 h-auto">
      <div className="grid grid-cols-4 h-60vh justify-center items-center">
        <div className="grid justify-center h-30vh items-center">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={Anon} alt="zbox" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Anonymous</h1>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center h-30vh items-center">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={AbsPri} alt="zbox" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Absolute Privacy</h1>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center h-30vh items-center">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={TraspData} alt="zbox" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">High Security</h1>
          <p className="grid text-center h-5vh">No Logins. No Emails.</p>
        </div>
        <div className="grid justify-center h-30vh items-center">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={PSharing} alt="zbox" height="auto" width="150px" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">
            Simple Private Sharing
          </h1>
          <p className="grid text-center h-5vh">P2P data sharing.</p>
        </div>
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

      <div className="grid grid-cols-2 h-95vh">
        <div className="grid justify-center items-center">
          <img src={EnjAnon} alt="sharing" />
        </div>

        <div className="grid ">
          <div className=" grid justify-center self-end  h-20vh text-6xl">
            <span>Enjoy</span>
            <span className="text-6xl p-1 font-black text-transparent bg-clip-text bg-gradient-to-b from-green-500 to-blue-900">
              Anonymity
            </span>
          </div>
          <div className="grid justify-center self-start h-10vh">
            Share files securely with people
          </div>
        </div>
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

      <div className="grid grid-cols-1 h-100vh">
        <div className=" grid  justify-center items-center h-20vh">
          <div className="text-5xl">Case Studies</div>
        </div>
        <div className="grid h-80vh">
          <UseCasesTabs />
        </div>
      </div>

      <div className="grid grid-cols-1 bg-gray-900 text-white h-100vh">
        <div className=" grid  justify-center items-center h-20vh">
          <div className="text-5xl">News and Updates</div>
        </div>
        <div className="grid h-80vh">
          <ZBoxUpdates updates={updates} />
        </div>
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

const ZBoxUpdates = ({ updates }) => {
  const { width } = useWindowSize();

  return width > 1300 ? (
    <div className="flex flex-wrap m-10 p-10">
      {" "}
      {updates.map((update, index) => {
        return (
          <div className="gird h-15vh w-80 justify-center  border-2 border-white rounded-xl items-center p-5 m-5 ">
            <a href={update.item_url}>
              <div className="grid h-5vh text-white underline font-black text-center">
                {update.item_topic}
              </div>
            </a>
            <div className="grid h-5vh">{update.item_description}</div>
          </div>
        );
      })}{" "}
    </div>
  ) : (
    <div className="flex flex-wrap m-2 p-2">
      {" "}
      {updates.map((update, index) => {
        return (
          <div className="gird h-15vh w-80 justify-center  border-2 border-white rounded-xl items-center p-2 m-2 ">
            <a href={update.item_url}>
              <div className="grid h-5vh text-white underline font-black text-center">
                {update.item_topic}
              </div>
            </a>
            <div className="grid h-5vh">{update.item_description}</div>
          </div>
        );
      })}{" "}
    </div>
  );
};

const UseCasesTabs = () => {
  const { width } = useWindowSize();
  return (
    <div className="grid justify-center w-full">
      <Tabs className="w-full">
        <TabList className="">
          <Tab>Private Sharing</Tab>
          <Tab>Anonymity</Tab>
          <Tab>Data Protection</Tab>
          <Tab>Transparency</Tab>
        </TabList>
        <TabPanel>
          {width > 1300 ? <LPrivSharing /> : <MPrivSharing />}
        </TabPanel>
        <TabPanel>{width > 1300 ? <LAnonymity /> : <MAnonymity />}</TabPanel>
        <TabPanel>
          {width > 1300 ? <LDProtection /> : <MDProtection />}
        </TabPanel>
        <TabPanel>
          {width > 1300 ? <LTransparency /> : <MTransparency />}
        </TabPanel>
      </Tabs>
    </div>
  );
};

/* Larger Screen  */
export const LPrivSharing = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-3 text-black">
      <div className="grid bg-gray-100 justify-center items-center">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-xl">No Censorship</div>
            <div className="text-center">Prevent data breach</div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">
              Privacy Compliance
            </div>
            <div className="text-center">
              User owns data. Immutable record of activities
            </div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">Private Sharing</div>
            <div className="text-center">Fast, secured file sharing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Mobile Screen  */
export const MPrivSharing = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-1 text-black">
      <div className="grid bg-gray-100 justify-center items-center ">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold ">No Censorship</div>
            <div className="text-center">Prevent data breach</div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center ">Privacy Compliance</div>
            <div className="text-center">
              User owns data. Immutable record of activities
            </div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center ">Private Sharing</div>
            <div className="text-center">Fast, secured file sharing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LAnonymity = () => {
  return <div>hello</div>;
};

const MAnonymity = () => {
  return <div>hello</div>;
};

const LDProtection = () => {
  return <div>hello</div>;
};

const MDProtection = () => {
  return <div>hello</div>;
};

const LTransparency = () => {
  return <div>hello</div>;
};

const MTransparency = () => {
  return <div>hello</div>;
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
            updates {
              item_description
              item_topic
              item_url
            }
          }
        }
      }
    }
  }
`;

/* 
    
      <div className="grid grid-cols-2  h-100vh">
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


*/
