import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import ResourcePageTemplate from "../../components/ResourcePageTemplate";

import ZChainPaper from "/static/img/whitepapers/data_privacy.png";
import ZChainConsensus from "/static/img/whitepapers/consensus_protocol.png";
import useWindowSize from "/screenSize.js";

const WhitepaperPage = ({ data }) => {
  const { width } = useWindowSize();

  console.log(data, "data");

  const title = data.site.siteMetadata.title;
  const WhitepaperData = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout>
      <Helmet title={`0Box ||  ${title} `} />

      <ResourcePageTemplate resource={WhitepaperData} />
      {/* GRID FOR ACTUAL WHITEPAPERS */}
      {width > 1300 ? <LWhite /> : <MWhite />}
    </Layout>
  );
};
export default WhitepaperPage;

const LWhite = () => {
  return (
    <div className="grid grid-cols-2 text-black">
      {/* 0chain whitepaper */}

      <div className="grid text-black justify-center items-center border rounded m-10 p-10 transform hover:scale-105 motion-reduce:transform-none">
        <a
          href="https://drive.google.com/file/d/1PdgyfnkryrCayufxTAa1UhUQ4Z9uSVGK/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img src={ZChainPaper} alt="0chain white paper" />
          </div>
        </a>
        <div>
          <strong>Abstract: </strong>
          0Chain provides automated data privacy compliance, continuous
          protection, and secured sharing for your application. 0Chain is
          near-impossible to breach, has an immutable data ledger to resolve
          disputes, conduct audits, and eliminate data liability. In addition,
          0Chain enables secured data sharing between customers, partners,
          internal groups, and employees. And the platform extends private data
          usage in smart contract applications on blockchain platforms such as
          Hyperledger and Ethereum with simple API interfaces and can provide
          such integration with any smart contract blockchains.
        </div>
      </div>

      {/* consensus protocol */}
      <div className="grid justify-center items-center border rounded m-10 p-10 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainConsensus} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          We describe the 0Chain blockchain ecosystem, including a new consensus
          protocol offering fast finality. We provide proofs of security for the
          protocol, along with experiment results validating its efficiency
          under realistic network conditions.
        </div>
      </div>
      {/* 0chain whitepaper */}
      <div className="grid justify-center items-center border rounded m-10 p-10 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainPaper} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          0Chain provides automated data privacy compliance, continuous
          protection, and secured sharing for your application. 0Chain is
          near-impossible to breach, has an immutable data ledger to resolve
          disputes, conduct audits, and eliminate data liability. In addition,
          0Chain enables secured data sharing between customers, partners,
          internal groups, and employees. And the platform extends private data
          usage in smart contract applications on blockchain platforms such as
          Hyperledger and Ethereum with simple API interfaces and can provide
          such integration with any smart contract blockchains.
        </div>
      </div>
      {/* consensus protocol */}
      <div className="grid justify-center items-center border rounded m-10 p-10 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainConsensus} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          We describe the 0Chain blockchain ecosystem, including a new consensus
          protocol offering fast finality. We provide proofs of security for the
          protocol, along with experiment results validating its efficiency
          under realistic network conditions.
        </div>
      </div>
      {/* 0chain whitepaper */}
      <div className="grid justify-center items-center border rounded m-10 p-10 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainPaper} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          0Chain provides automated data privacy compliance, continuous
          protection, and secured sharing for your application. 0Chain is
          near-impossible to breach, has an immutable data ledger to resolve
          disputes, conduct audits, and eliminate data liability. In addition,
          0Chain enables secured data sharing between customers, partners,
          internal groups, and employees. And the platform extends private data
          usage in smart contract applications on blockchain platforms such as
          Hyperledger and Ethereum with simple API interfaces and can provide
          such integration with any smart contract blockchains.
        </div>
      </div>
      {/* consensus protocol */}
      <div className="grid justify-center items-center border rounded m-10 p-10 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainConsensus} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          We describe the 0Chain blockchain ecosystem, including a new consensus
          protocol offering fast finality. We provide proofs of security for the
          protocol, along with experiment results validating its efficiency
          under realistic network conditions.
        </div>
      </div>
    </div>
  );
};

const MWhite = () => {
  return (
    <div className="grid grid-cols-1 text-black">
      {/* 0chain whitepaper */}

      <div className="grid text-black justify-center items-center border rounded m-5 p-5 transform hover:scale-105 motion-reduce:transform-none">
        <a
          href="https://drive.google.com/file/d/1PdgyfnkryrCayufxTAa1UhUQ4Z9uSVGK/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={ZChainPaper}
              alt="0chain white paper"
              className="object-cover h-20vh w-full"
            />
          </div>
        </a>
        <div className="text-center">
          <strong>Abstract: </strong>
          0Chain provides automated data privacy compliance, continuous
          protection, and secured sharing for your application. 0Chain is
          near-impossible to breach, has an immutable data ledger to resolve
          disputes, conduct audits, and eliminate data liability. In addition,
          0Chain enables secured data sharing between customers, partners,
          internal groups, and employees. And the platform extends private data
          usage in smart contract applications on blockchain platforms such as
          Hyperledger and Ethereum with simple API interfaces and can provide
          such integration with any smart contract blockchains.
        </div>
      </div>

      {/* consensus protocol */}
      <div className="grid justify-center items-center border rounded m-5 p-5 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainConsensus} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          We describe the 0Chain blockchain ecosystem, including a new consensus
          protocol offering fast finality. We provide proofs of security for the
          protocol, along with experiment results validating its efficiency
          under realistic network conditions.
        </div>
      </div>
      {/* 0chain whitepaper */}
      <div className="grid justify-center items-center border rounded m-5 p-5 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainPaper} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          0Chain provides automated data privacy compliance, continuous
          protection, and secured sharing for your application. 0Chain is
          near-impossible to breach, has an immutable data ledger to resolve
          disputes, conduct audits, and eliminate data liability. In addition,
          0Chain enables secured data sharing between customers, partners,
          internal groups, and employees. And the platform extends private data
          usage in smart contract applications on blockchain platforms such as
          Hyperledger and Ethereum with simple API interfaces and can provide
          such integration with any smart contract blockchains.
        </div>
      </div>
      {/* consensus protocol */}
      <div className="grid justify-center items-center border rounded m-5 p-5 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainConsensus} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          We describe the 0Chain blockchain ecosystem, including a new consensus
          protocol offering fast finality. We provide proofs of security for the
          protocol, along with experiment results validating its efficiency
          under realistic network conditions.
        </div>
      </div>
      {/* 0chain whitepaper */}
      <div className="grid justify-center items-center border rounded m-5 p-5 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainPaper} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          0Chain provides automated data privacy compliance, continuous
          protection, and secured sharing for your application. 0Chain is
          near-impossible to breach, has an immutable data ledger to resolve
          disputes, conduct audits, and eliminate data liability. In addition,
          0Chain enables secured data sharing between customers, partners,
          internal groups, and employees. And the platform extends private data
          usage in smart contract applications on blockchain platforms such as
          Hyperledger and Ethereum with simple API interfaces and can provide
          such integration with any smart contract blockchains.
        </div>
      </div>
      {/* consensus protocol */}
      <div className="grid justify-center items-center border rounded m-5 p-5 transform hover:scale-105 motion-reduce:transform-none">
        <div>
          <img src={ZChainConsensus} alt="0chain white paper" />
        </div>
        <div>
          <strong>Abstract: </strong>
          We describe the 0Chain blockchain ecosystem, including a new consensus
          protocol offering fast finality. We provide proofs of security for the
          protocol, along with experiment results validating its efficiency
          under realistic network conditions.
        </div>
      </div>
    </div>
  );
};

export const WhitepaperPageQuery = graphql`
  query WhitepaperQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Whitepapers" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            resource_description
            resource_yt_link
            resource_yt_thumbnail {
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
