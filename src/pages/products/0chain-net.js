import React from "react";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ProductPageTemplate from "../../components/ProductPageTemplate";
import useWindowSize from "/screenSize.js";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

/* 0box images */
import ZChainNetLogo from "/static/img/0chain-net/0chainNet/0chain-black-icon.svg";
// import GPlay from "/static/img/logo/google-play-badge.png";
// import APlay from "/static/img/logo/appstore-black.svg";
import Anon from "/static/img/0box/anonymous.png";
import AbsPri from "/static/img/0box/absolute-privacy.png";
import TraspData from "/static/img/0box/transparent-data-protection.png";
import PSharing from "/static/img/0stor/features/0stor_private-data-sharing.svg";
// import AllocDet from "/static/img/0box/Allocation-Details.png";

// import EnjAnon from "/static/img/0box/File.png";

// import Transparency from "/static/img/0box/transparency.png";

const ZChainNetPage = ({ data }) => {
  const { width } = useWindowSize();

  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const ZChainNetData = data.allMarkdownRemark.edges[0].node.frontmatter;

  const ZChainNetUpd = data.allMarkdownRemark.edges[0].node.frontmatter.updates.slice(
    0,
    9
  );

  return (
    <Layout>
      <Helmet title={`0Chain Net |  ${title} `} />

      <ProductPageTemplate product={ZChainNetData} />

      {width > 1300 ? (
        <ZChainNetCustom updates={ZChainNetUpd} />
      ) : (
        <MZChainNetCustom updates={ZChainNetUpd} />
      )}
    </Layout>
  );
};
export default ZChainNetPage;

const MZChainNetCustom = ({ updates }) => {
  return (
    <div className="grid  h-auto">
      <div className="grid  h-auto bg-gray-900 justify-center items-center ">
        <div className="grid justify-center h-40vh items-center filter invert ">
          <div className="grid h-20vhvh justify-center items-center w-15vw ">
            <img src={Anon} alt="zChainNet" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">
            High Performance Storage
          </h1>
          <p className="grid text-center h-5vh">
            Parallel, high speed data operations .
          </p>
        </div>
        <div className="grid justify-center h-40vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={AbsPri} alt="zChainNet" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Multiple Leaders</h1>
          <p className="grid text-center h-5vh">
            Resistant to DDoS attacks that can stall a blockchain
          </p>
        </div>
        <div className="grid justify-center h-40vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={TraspData} alt="zChainNet" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">
            Simple GDPR search
          </h1>
          <p className="grid text-center h-5vh">
            Easy search for data activity on blockchain
          </p>
        </div>
        <div className="grid justify-center h-40vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={PSharing} alt="zChainNet" height="auto" width="150px" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Squared Staking</h1>
          <p className="grid text-center h-5vh">
            Prevent Sybil Miners from taking over the network
          </p>
        </div>
        <div className="grid justify-center h-40vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={PSharing} alt="zChainNet" height="auto" width="150px" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Immutable ledger</h1>
          <p className="grid text-center h-5vh">
            Ultimate GDPR compliance of data activity
          </p>
        </div>

        <div className="grid justify-center h-40vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={PSharing} alt="zChainNet" height="auto" width="150px" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">
            Privacy compliance
          </h1>
          <p className="grid text-center h-5vh">
            Full ownership of data. Prevent Schrems II and Joint Controller
            issues
          </p>
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
          <ZChainNetUpdates updates={updates} />
        </div>
      </div>

      <div className="grid grid-cols-1 h-auto p-5">
        <div className="grid justify-center items-center h-20vh p-5">
          <img
            src={ZChainNetLogo}
            alt="0boz logo"
            width="100px"
            height="100px"
          />
        </div>
        <div className="grid justify-center items-center text-center h-10vh text-3xl p-5">
          Get started with 0ChainNet for free
        </div>
        <div className="grid grid-cols-1 justify-center items-center h-20vh">
          <div className="grid justify-center items-center">
            <button className="border-4 rounded-2xl border-green-500 p-2">
              Try Betanet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ZChainNetCustom = ({ updates }) => {
  return (
    <div className="grid grid-cols-1 h-auto">
      <div className="grid grid-cols-3 h-100vh bg-gray-900 justify-center items-center ">
        <div className="grid justify-center h-30vh items-center filter invert ">
          <div className="grid h-20vhvh justify-center items-center w-15vw ">
            <img src={Anon} alt="zChainNet" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">
            High Performance Storage
          </h1>
          <p className="grid text-center h-5vh">
            Parallel, high speed data operations .
          </p>
        </div>
        <div className="grid justify-center h-30vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={AbsPri} alt="zChainNet" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Multiple Leaders</h1>
          <p className="grid text-center h-5vh">
            Resistant to DDoS attacks that can stall a blockchain
          </p>
        </div>
        <div className="grid justify-center h-30vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={TraspData} alt="zChainNet" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">
            Simple GDPR search
          </h1>
          <p className="grid text-center h-5vh">
            Easy search for data activity on blockchain
          </p>
        </div>
        <div className="grid justify-center h-30vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={PSharing} alt="zChainNet" height="auto" width="150px" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Squared Staking</h1>
          <p className="grid text-center h-5vh">
            Prevent Sybil Miners from taking over the network
          </p>
        </div>
        <div className="grid justify-center h-30vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={PSharing} alt="zChainNet" height="auto" width="150px" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">Immutable ledger</h1>
          <p className="grid text-center h-5vh">
            Ultimate GDPR compliance of data activity
          </p>
        </div>

        <div className="grid justify-center h-30vh items-center filter invert">
          <div className="grid h-20vhvh justify-center items-center w-15vw">
            <img src={PSharing} alt="zChainNet" height="auto" width="150px" />
          </div>
          <h1 className="grid text-4xl h-5vh text-center">
            Privacy compliance
          </h1>
          <p className="grid text-center h-5vh">
            Full ownership of data. Prevent Schrems II and Joint Controller
            issues
          </p>
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
          <ZChainNetUpdates updates={updates} />
        </div>
      </div>

      <div className="grid grid-cols-1 h-auto p-20">
        <div className="grid justify-center items-center h-10vh">
          <img
            src={ZChainNetLogo}
            alt="0boz logo"
            width="100px"
            height="100px"
          />
        </div>
        <div className="grid justify-center items-center h-10vh text-4xl">
          Get started with 0ChainNet for free
        </div>
        <div className="grid grid-cols-1 justify-center items-center h-30vh">
          <div className="grid justify-center items-center">
            <button className="border-4 border-green-500 p-2">
              Try Betanet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ZChainNetUpdates = ({ updates }) => {
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
            <div className="grid h-5vh">
              {update.item_description.slice(0, 80) + "..."}
            </div>
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

export const ZChainNetPageQuery = graphql`
  query ZChainQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "0Chain Net" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            banner_info
            banner_title
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
              item_topic
              item_description
              item_url
            }
          }
        }
      }
    }
  }
`;
