import React from "react";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import CommunityPageTemplate from "../../components/CommunityPageTemplate";
import useWindowSize from "/screenSize.js";

import Be1 from "/static/img/gfx/specializedinfrastructure.svg";
import Be2 from "/static/img/gfx/minersharder.svg";
import Be3 from "/static/img/gfx/blobberconcept.svg";

const BeaMinerPage = ({ data }) => {
  const { width } = useWindowSize();

  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const BeaMinerData = data.allMarkdownRemark.edges[0].node.frontmatter;
  const BeAMinerUpdates = data.allMarkdownRemark.edges[0].node.frontmatter.updates.slice(
    0,
    9
  );

  return (
    <Layout>
      <Helmet title={`0Box ||  ${title} `} />

      <CommunityPageTemplate community={BeaMinerData} />
      {width > 1300 ? (
        <LBeAMiner updates={BeAMinerUpdates} />
      ) : (
        <MBeAMiner updates={BeAMinerUpdates} />
      )}
    </Layout>
  );
};
export default BeaMinerPage;

const LBeAMiner = ({ updates }) => {
  return (
    <div className="grid grid-cols-1 h-auto">
      <div className="grid grid-cols-2 bg-black text-white h-95vh">
        <div className="grid ">
          <div className=" grid justify-center self-end  h-20vh text-6xl">
            <span className="text-4xl p-1 font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-500">
              Earn ZCN as a miner
            </span>
          </div>
          <div className="grid justify-center self-start h-auto">
            <button className="border-2 border-green-500 p-5 rounded-3xl">
              Token Economics
            </button>
          </div>
        </div>
        <div className="grid justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hGldau5gvJ4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1  h-95vh">
        <div className="grid ">
          <div className=" grid justify-center self-end  h-20vh text-6xl p-20">
            <span>Scalable Infrastructure</span>
          </div>
          <div className="grid justify-center items-center filter invert rounded-2xl">
            <img src={Be1} alt="sharing" width="600px" height="600px" />
          </div>
          <div className="grid justify-center self-start h-10vh">
            0ChainNet assigns separate roles for performance and security:
            miners, sharders, blobbers, and validators.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-black text-white  h-95vh">
        <div className="grid ">
          <div className=" grid justify-center self-end  h-20vh text-6xl p-20">
            <span>Miner/Sharder Load Balancing</span>
          </div>
          <div className="grid justify-center items-center  rounded-2xl">
            <img src={Be2} alt="sharing" width="600px" height="600px" />
          </div>
          <div className="grid justify-center self-start h-10vh">
            Client sends transaction to the miners, and query the sharders for
            status. Miners/Sharders get paid for each finalized block.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  h-95vh">
        <div className="grid ">
          <div className=" grid justify-center self-end  h-20vh text-6xl p-20">
            <span>Storage protocol: secure, scalable, performant</span>
          </div>
          <div className="grid justify-center items-center filter invert rounded-2xl">
            <img src={Be3} alt="sharing" width="800px" height="auto" />
          </div>
          <div className="grid justify-center self-start h-10vh">
            Client splits file, sends to Blobbers. They commit markers to
            0ChainNet and get paid through challenges. Reads are paid
            immediately.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-gray-900 text-white h-100vh">
        <div className=" grid  justify-center items-center h-20vh">
          <div className="text-5xl">News and Updates</div>
        </div>
        <div className="grid h-80vh">
          <BeAMinerUpdates updates={updates} />
        </div>
      </div>

      <div className="grid grid-cols-1 h-auto p-20">
        <div className="grid justify-center items-center h-10vh text-4xl">
          Get started with 0Box for free
        </div>
        <div className="grid grid-cols-1 justify-center items-center h-30vh">
          <div className="grid justify-center items-center">
            <button className="border-2 border-green-500 p-2">
              Token Economics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeAMinerUpdates = ({ updates }) => {
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
          <div className="gird h-15vh w-full justify-center  border-2 border-gray-100 rounded-xl items-center p-2 m-2 ">
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

const MBeAMiner = ({ updates }) => {
  return (
    <div className="grid grid-cols-1 h-auto">
      <div className="grid grid-cols-1 bg-black text-white h-95vh">
        <div className="grid ">
          <div className=" grid justify-center self-end  h-auto text-6xl">
            <span className="text-6xl p-5 font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-500">
              Earn ZCN as a miner
            </span>
          </div>
          <div className="grid justify-center self-start h-auto">
            <button className="border-2 border-green-500 p-5 rounded-3xl">
              Token Economics
            </button>
          </div>
        </div>
        <div className="grid justify-center items-center">
          <iframe
            width="auto"
            height="auto"
            src="https://www.youtube.com/embed/hGldau5gvJ4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-1  h-95vh">
        <div className="grid ">
          <div className=" grid justify-center items-center text-center h-20vh text-3xl p-20">
            <span>Scalable Infrastructure</span>
          </div>
          <div className="grid justify-center items-center filter invert rounded-2xl">
            <img src={Be1} alt="sharing" width="600px" height="600px" />
          </div>
          <div className="grid justify-center self-start h-10vh p-5 text-center">
            0ChainNet assigns separate roles for performance and security:
            miners, sharders, blobbers, and validators.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-black text-white  h-95vh">
        <div className="grid ">
          <div className=" grid justify-center items-center text-center h-20vh text-3xl p-20">
            <span>Miner/Sharder Load Balancing</span>
          </div>
          <div className="grid justify-center items-center  rounded-2xl">
            <img src={Be2} alt="sharing" width="600px" height="600px" />
          </div>
          <div className="grid justify-center self-start h-10vh text-center p-10">
            Client sends transaction to the miners, and query the sharders for
            status. Miners/Sharders get paid for each finalized block.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  h-95vh">
        <div className="grid ">
          <div className=" grid justify-center items-center text-center h-20vh text-3xl p-20">
            <span>Storage protocol: secure, scalable, performant</span>
          </div>
          <div className="grid justify-center items-center filter invert rounded-2xl">
            <img src={Be3} alt="sharing" width="800px" height="auto" />
          </div>
          <div className="grid justify-center self-start h-10vh p-10 text-center">
            Client splits file, sends to Blobbers. They commit markers to
            0ChainNet and get paid through challenges. Reads are paid
            immediately.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 bg-gray-900 text-white h-auto">
        <div className=" grid  justify-center items-center h-20vh">
          <div className="text-5xl p-5 text-center">News and Updates</div>
        </div>
        <div className="grid h-auto">
          <BeAMinerUpdates updates={updates} />
        </div>
      </div>

      <div className="grid grid-cols-1 h-auto p-20">
        <div className="grid justify-center items-center h-10vh text-4xl text-center">
          Become a miner, sharder or blobber.
        </div>
        <div className="grid grid-cols-1 justify-center items-center h-30vh">
          <div className="grid justify-center items-center">
            <button className="border-2 border-green-500 p-2">
              Token Economics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BeaMinerPageQuery = graphql`
  query BeaMinerQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Be a miner" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            community_description
            community_yt_link
            community_yt_thumbnail {
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
