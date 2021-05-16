import * as React from "react";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "gatsby";

//MINERS
const menuMiners = (
  <div className=" bg-gray-200">
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
);

export const Miners = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Miners
      <DownOutlined />
    </button>
  </Dropdown>
);

export const Sharders = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Sharders
      <DownOutlined />
    </button>
  </Dropdown>
);
export const Blobbers = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Blobbers
      <DownOutlined />
    </button>
  </Dropdown>
);
export const ZCN = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      ZCN
      <DownOutlined />
    </button>
  </Dropdown>
);
export const Blockchain = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Blockchain
      <DownOutlined />
    </button>
  </Dropdown>
);
export const ZBox = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      ZBox
      <DownOutlined />
    </button>
  </Dropdown>
);
export const Hash = () => (
  <Dropdown overlay={menuMiners} placement="topCenter" arrow>
    <button onClick={(e) => e.preventDefault()} className="ant-dropdown-link">
      Hash
      <DownOutlined />
    </button>
  </Dropdown>
);
