import * as React from "react";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import useWindowSize from "/screenSize.js";

//logo
import ZBox from "./0box_black.svg";

const { SubMenu } = Menu;

const dropDown = {
  resources: [
    {
      name: "WhitePapers",
      page: "/resources/whitepaper",
      subItems: [
        {
          sName: "0Chain Technical Whitepaper",
          src:
            "https://drive.google.com/file/d/1PdgyfnkryrCayufxTAa1UhUQ4Z9uSVGK/view",
        },
        {
          sName: "Storage Protocol",
          src:
            "https://drive.google.com/file/d/1tNjb_OvX93s47QQ2gFrfeUBdmP0PcL9k/view",
        },
        {
          sName: "Consensus Protocol",
          src:
            "https://drive.google.com/file/d/1KcfkQ1HmtGXvXzZtalNkVHMmIcwOiA7k/view",
        },
        {
          sName: "PRE (Proxy Re-Encryption)",
          src: "https://eprint.iacr.org/2019/418.pdf",
        },
        {
          sName: "Split-key (Serverless 2FA) Protocol",
          src:
            "https://drive.google.com/file/d/1urvaAe0w1DtO9n2JIknK4lCQzGEyE8Pl/view",
        },
        {
          sName: "Token Reward Protocol",
          src:
            "https://drive.google.com/file/d/1nqOwFWbH-j3uYRcx8gmTzAuC3wDxa9tu/view",
        },
        {
          sName: "Economic Protocol",
          src:
            "https://drive.google.com/file/d/1I463d-v3VGkr86WcfJq-HfnaAlHHQbzf/view",
        },
        {
          sName: "Equilibrium Price of 0Chain",
          src:
            "https://drive.google.com/file/d/1emqKT-Z2SyZXH2MHmCrr8suJfoVhffbc/view",
        },
        {
          sName: "Governance Protocol",
          src:
            "https://drive.google.com/file/d/1zi-ADhRe6KbYx_HJxMcZNuBm_C-84Pgm/view",
        },
      ],
    },
    {
      name: "Documentation",
      page: "/resources/documentation",
      subItems: [
        {
          sName: "Documentation 1",
          src: "https://0chain.net/page-documentation.html",
        },
        {
          sName: "Documentation 2",
          src: "https://documenter.getpostman.com/view/5505940/TzJpgysM",
        },
        { sName: "Documentation 3", src: "http://docs.0chain.net/" },
        { sName: "See More...", src: "/resources/documentation" },
      ],
    },
    {
      name: "Github",
      page: "/resources/github",
      subItems: [
        { sName: "0chain", src: "https://github.com/0chain/0chain" },
        { sName: "Go SDK", src: "https://github.com/0chain/gosdk" },
        { sName: "JS SDK", src: "https://github.com/0chain/js-client-sdk" },
        { sName: "Zbox CLI", src: "https://github.com/0chain/zboxcli" },
        { sName: "Blobber", src: "https://github.com/0chain/blobber" },
        { sName: "ZWallet CLI", src: "https://github.com/0chain/zwalletcli" },
        { sName: "0miner", src: "https://github.com/0chain/0miner" },
        { sName: "0Proxy", src: "https://github.com/0chain/0proxy" },
        { sName: "0dns", src: "https://github.com/0chain/0dns" },
        { sName: "0block", src: "https://github.com/0chain/0block" },
        { sName: "Keygen", src: "https://github.com/0chain/keygen" },
        { sName: "See More...", src: "https://github.com/0chain" },
      ],
    },
  ],
  products: [
    {
      name: "0Box",
      page: "/products/0box",
      subItems: [
        { sName: "0Box 1", src: "/#" },
        { sName: "0Box 2", src: "/#" },
      ],
    },
    {
      name: "0Chain-net",
      page: "/products/0chain-net",
      subItems: [
        { sName: "0Chain-net 1", src: "/#" },
        { sName: "PChain-net 2", src: "/#" },
      ],
    },
    {
      name: "0Stor",
      page: "/products/0stor",
      subItems: [
        { sName: "0Stor 1", src: "/#" },
        { sName: "0Stor 2", src: "/#" },
      ],
    },
    {
      name: "0Wallet",
      page: "/products/0wallet",
      subItems: [
        { sName: "0Wallet 1", src: "/#" },
        { sName: "0Wallet 2", src: "/#" },
      ],
    },
    {
      name: "0Lake",
      page: "/products/0lake",
      subItems: [
        { sName: "0Lake 1", src: "/#" },
        { sName: "0Lake 2", src: "/#" },
      ],
    },
  ],
  solutions: [
    {
      name: "Blockchain",
      page: "/solutions/blockchain",
      subItems: [
        { sName: "0Box 1", src: "/#" },
        { sName: "0Box 2", src: "/#" },
      ],
    },
    {
      name: "Social Media",
      page: "/solutions/social-media",
      subItems: [
        { sName: "0Chain-net 1", src: "/#" },
        { sName: "PChain-net 2", src: "/#" },
      ],
    },
    {
      name: "Identity",
      page: "/solutions/identity",
      subItems: [
        { sName: "0Stor 1", src: "/#" },
        { sName: "0Stor 2", src: "/#" },
      ],
    },
    {
      name: "Health Care",
      page: "/solutions/health-care",
      subItems: [
        { sName: "0Wallet 1", src: "/#" },
        { sName: "0Wallet 2", src: "/#" },
      ],
    },
    {
      name: "Supply Chain",
      page: "/solutions/supply-chain",
      subItems: [
        { sName: "0Lake 1", src: "/#" },
        { sName: "0Lake 2", src: "/#" },
      ],
    },
  ],
  community: [
    {
      name: "Be a miner",
      page: "/community/be-a-miner",
      subItems: [
        { sName: "0Box 1", src: "/#" },
        { sName: "0Box 2", src: "/#" },
      ],
    },
    {
      name: "Developer Programs",
      page: "/community/developer-programs",
      subItems: [
        { sName: "0Chain-net 1", src: "/#" },
        { sName: "PChain-net 2", src: "/#" },
      ],
    },
    {
      name: "Bug Bounty",
      page: "/community/bug-bounty",
      subItems: [
        { sName: "0Stor 1", src: "/#" },
        { sName: "0Stor 2", src: "/#" },
      ],
    },
    {
      name: "ZCN",
      page: "/community/zcn",
      subItems: [
        { sName: "0Wallet 1", src: "/#" },
        { sName: "0Wallet 2", src: "/#" },
      ],
    },
    {
      name: "Forums",
      page: "/community/forum",
      subItems: [
        { sName: "0Lake 1", src: "/#" },
        { sName: "0Lake 2", src: "/#" },
      ],
    },
  ],
};

const MMenu = () => {
  return (
    <div className="grid grid-cols-1 bg-gray-50 h-auto w-screen">
      {dropDown.resources.map((item, index) =>
        item.name === "WhitePapers" ? (
          <div className="p-2 grid">
            <Link to={item.page}>
              <div className="text-black grid underline  font-black  content-center justify-center p-5">
                {item.name}{" "}
              </div>
            </Link>
          </div>
        ) : (
          <div className="p-2 grid  justify-center ">
            <Link to={item.page}>
              <div className="text-black grid underline  font-black  content-center justify-center p-5">
                {item.name}{" "}
              </div>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

const LMenu = () => {
  return (
    <div className="grid grid-cols-12 bg-gray-50 h-60vh w-screen">
      {dropDown.resources.map((item, index) =>
        item.name === "WhitePapers" ? (
          <div className=" grid col-span-4 p-10">
            <Link
              to={item.page}
              className="text-black grid underline text-5xl h-10vh font-black flex content-center justify-center p-5"
            >
              {item.name}{" "}
            </Link>

            <div className=" flex flex-col items-center h-40vh">
              {item.subItems.map((sItem, sIndex) => (
                <div className="m-1">
                  <a
                    href={sItem.src}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    style={{ color: "gray" }}
                    className="  "
                  >
                    {sItem.sName}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-10 grid col-span-4 justify-center ">
            <Link
              to={item.page}
              className="text-black grid underline text-5xl h-10vh font-black flex content-center justify-center p-5"
            >
              {item.name}{" "}
            </Link>

            <div className=" flex flex-col items-center h-40vh   ">
              {item.subItems.map((sItem, sIndex) => (
                <a
                  href={sItem.src}
                  style={{ color: "gray" }}
                  className=" mx-3 px-1  flex"
                >
                  {sItem.sName}
                </a>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export const ResourcesDropDown = () => {
  const { width } = useWindowSize();
  return (
    <Dropdown
      overlay={width > 1300 ? <LMenu /> : <MMenu />}
      placement="bottomLeft"
      arrow
      trigger={["click"]}
    >
      <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
        Resources
        <DownOutlined />
      </button>
    </Dropdown>
  );
};

const Logo = ({ main_logo }) => {
  return <img src={ZBox} alt="some logo" height="100px" />;
};

//PRODUCTSS
const LProduct = () => {
  return (
    <div className="grid grid-cols-10 bg-gray-50 h-50vh">
      {dropDown.products.map((item, index) => (
        <div className="grid col-span-2 justify-center items-center p-5">
          <Link
            to={item.page}
            className="text-black grid underline text-5xl h-10vh font-black flex content-center justify-center p-5"
          >
            {
              {
                "0Box": <Logo />,
                "0Chain-net": <Logo />,
                "0Stor": <Logo />,
                "0Wallet": <Logo />,
                "0Lake": <Logo />,
              }[item.name]
            }
          </Link>

          <div className="grid justify-center items-center h-10vh">
            shoret a siudais iausdbi uiuasbd asidsai ui iashd shoret a siudais
            iausdbi uiuasbd asidsai ui iashd shoret a siudais iausdbi uiuasbd
            asidsai ui iashd shoret a siudais iausdbi uiuasbd asidsai ui iashd{" "}
          </div>
          <div className=" grid h-10vh ">
            {item.subItems.map((sItem, sIndex) => (
              <div className=" m-1 justify-self-center items-self-center">
                <a
                  href={sItem.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "gray" }}
                >
                  {sItem.sName}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const MProduct = () => {
  return (
    <div className="grid grid-cols-1 bg-gray-50 h-auto w-screen">
      {dropDown.products.map((item, index) => (
        <div className="grid justify-center items-center p-2">
          <Link to={item.page}>
            <div className="text-black m-2 justify-center items-center grid underline  font-black">
              {item.name}{" "}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const ProductsDropDown = () => {
  const { width } = useWindowSize();

  return (
    <div>
      <Dropdown
        overlay={width > 1300 ? <LProduct /> : <MProduct />}
        placement="bottomLeft"
        arrow
        trigger={["click"]}
      >
        <button
          onClick={(e) => e.preventDefault()}
          className="ant-dropdown-link"
        >
          Products
          <DownOutlined />
        </button>
      </Dropdown>
    </div>
  );
};

//community
const LCommunity = () => {
  return (
    <div className="grid grid-cols-10 bg-gray-50 h-70vh">
      {dropDown.community.map((item, index) => (
        <div className="grid col-span-2 justify-center items-center p-10">
          <a href={item.page}>
            <div className="text-black m-2 justify-center items-center grid underline text-5xl font-black">
              {item.name}{" "}
            </div>
          </a>

          <div className="grid justify-center items-center">
            shoret a siudais iausdbi uiuasbd asidsai ui iashd shoret a siudais
            iausdbi uiuasbd asidsai ui iashd shoret a siudais iausdbi uiuasbd
            asidsai ui iashd shoret a siudais iausdbi uiuasbd asidsai ui iashd{" "}
          </div>

          <div className=" grid h-10vh ">
            {item.subItems.map((sItem, sIndex) => (
              <div className=" m-1 justify-self-center items-self-center">
                <a
                  // href={sItem.src}
                  // target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "gray" }}
                >
                  <div className="">{sItem.sName}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const MCommunity = () => {
  return (
    <div className="grid grid-cols-1 bg-gray-50 h-auto w-screen">
      {dropDown.community.map((item, index) => (
        <div className="grid justify-center items-center p-2">
          <a href={item.page}>
            <div className="text-black m-2 justify-center items-center grid underline  font-black">
              {item.name}{" "}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export const CommunityDropDown = () => {
  const { width } = useWindowSize();

  return (
    <Dropdown
      overlay={width > 1300 ? <LCommunity /> : <MCommunity />}
      placement="bottomLeft"
      arrow
      trigger={["click"]}
    >
      <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
        Community
        <DownOutlined />
      </button>
    </Dropdown>
  );
};

//solutions
/* const menuSolutions = (
  <div className="flex flex-col p-8 bg-gray-50 space-y-6 w-300">
    {dropDown.solutions.map((item, index) => (
      <div className="">
        <a href={item.page}>
          <div className="text-sl text-black hover:text-green-900 h-25 flex content-center justify-center p-5">
            {item.name}{" "}
          </div>
        </a>

        <div className=" grid grid-cols-2 ">
          {item.subItems.map((sItem, sIndex) => (
            <div className="w-200 h-100 bg-green-100 m-3 hover:text-yellow-900">
              <a
                href={sItem.src}
                 target="_blank"
                 rel="noopener noreferrer"
                style={{ color: "gray" }}
              >
                <div className="hover:text-yellow-900 w-auto mx-3 px-1 ">
                  {sItem.sName}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const SolutionsDropDown = () => (
  <Dropdown overlay={menuSolutions} placement="bottomCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Solutions
      <DownOutlined />
    </button>
  </Dropdown>
);
 */
