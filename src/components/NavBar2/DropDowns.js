import * as React from "react";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "gatsby";

const { SubMenu } = Menu;

const dropDown = {
  resources: [
    {
      name: "WhitePapers",
      page: "/resources/whitepaper",
      subItems: [
        { sName: "Protocol 1", src: "/#" },
        { sName: "Protocol 2", src: "/#" },
        { sName: "Protocol 3", src: "/#" },
        { sName: "See More...", src: "/#" },
      ],
    },
    {
      name: "Documentation",
      page: "/resources/documentation",
      subItems: [
        { sName: "ProtocolD 1", src: "/#" },
        { sName: "ProtocolD 2", src: "/#" },
        { sName: "ProtocolD 3", src: "/#" },
        { sName: "See More...", src: "/#" },
      ],
    },
    {
      name: "Github",
      page: "/resources/github",
      subItems: [
        { sName: "ProtocolG 1", src: "/#" },
        { sName: "ProtocolG 2", src: "/#" },
        { sName: "ProtocolG 3", src: "/#" },
        { sName: "See More...", src: "/#" },
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
};

//RESOURCES
const menuResources = (
  <div className="flex flex-col p-8 bg-gray-50 space-y-6 w-300">
    {dropDown.resources.map((item, index) => (
      <div className="">
        <Link to={item.page}>
          <div className="text-sl text-black hover:text-green-900 h-25 flex content-center justify-center p-5">
            {item.name}{" "}
          </div>
        </Link>

        <div className=" grid grid-cols-2 ">
          {item.subItems.map((sItem, sIndex) => (
            <div className="w-200 h-100 bg-green-100 m-3 hover:text-yellow-900">
              <Link to={sItem.src} style={{ color: "gray" }}>
                {sItem.sName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const ResourcesDropDown = () => (
  <Dropdown overlay={menuResources} placement="bottomCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Resources
      <DownOutlined />
    </button>
  </Dropdown>
);

//PRODUCTSS
const menuProducts = (
  <div className="flex flex-col p-8 bg-gray-50 space-y-6 w-300">
    {dropDown.products.map((item, index) => (
      <div className="">
        <a href={item.page} target="_blank" rel="noopener noreferrer">
          <div className="text-sl text-black hover:text-green-900 h-25 flex content-center justify-center p-5">
            {item.name}{" "}
          </div>
        </a>

        <div className=" grid grid-cols-2 ">
          {item.subItems.map((sItem, sIndex) => (
            <div className="w-200 h-100 bg-green-100 m-3 hover:text-yellow-900">
              <Link to={sItem.src} style={{ color: "gray" }}>
                {sItem.sName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const ProductsDropDown = () => (
  <Dropdown overlay={menuProducts} placement="bottomCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Products
      <DownOutlined />
    </button>
  </Dropdown>
);

//solutions
const menuSolutions = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

export const SolutionsDropDown = () => (
  <Dropdown overlay={menuSolutions} placement="bottomCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Solutions
      <DownOutlined />
    </button>
  </Dropdown>
);

//community
const menuCommunity = (
  <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

export const CommunityDropDown = () => (
  <Dropdown overlay={menuCommunity} placement="bottomCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Community
      <DownOutlined />
    </button>
  </Dropdown>
);
