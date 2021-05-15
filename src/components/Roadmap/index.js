import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const VALUES = [
  "2017-08-4",
  "2017-11-12",
  "2018-03-01",
  "2018-04-01",
  "2018-07-01",
  "2018-11-01",
  "2019-01-01",
  "2019-04-01",
  "2019-07-01",
  "2019-11-01",
  "2020-01-01",
  "2020-04-01",
  "2020-07-01",
  "2020-11-01",
  "2021-01-01",
  "2021-04-01",
  "2021-07-01",
  "2021-11-01",
  "2022-01-01",
  "2022-04-01",
  "2022-07-01",
  "2022-11-01",
];

export default function Roadmap() {
  const [state, setState] = useState({
    value: 0,
    previous: 0,
  });

  return (
    <div className="bg-gray-900 h-100vh text-white">
      <div className="text-5xl h-20vh justify-center items-center grid">
        Roadmap
      </div>
      <div>
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "60%",
            height: "100px",
            margin: "0 auto",
            padding: "10",
          }}
        >
          <HorizontalTimeline
            index={state.value}
            indexClick={(index) => {
              setState({ value: index, previous: state.value });
            }}
            values={VALUES}
            minEventPadding={90}
            linePadding={70}
            labelWidth={100}
            getLabel={function (date) {
              console.log(date.slice(5, 7), "unsliced");

              switch (date.slice(5, 7)) {
                case "01":
                case "02":
                case "03": {
                  return date.slice(0, 4) + " Q1";
                }
                case "04":
                case "05":
                case "06": {
                  return date.slice(0, 4) + " Q2";
                }
                case "07":
                case "08":
                case "09": {
                  return date.slice(0, 4) + " Q3";
                }
                case "10":
                case "11":
                case "12": {
                  return date.slice(0, 4) + " Q4";
                }
              }
            }}
            styles={{
              background: "#101010",
              foreground: "#00cc99",
              outline: "#c1c1c1",
            }}
          />
        </div>
        {
          {
            0: <InnerTimeline17Q3 />,
            1: <InnerTimeline17Q4 />,
            2: <InnerTimeline18Q1 />,
            3: <InnerTimeline18Q2 />,
            4: <InnerTimeline18Q3 />,
            5: <InnerTimeline18Q4 />,
            6: <InnerTimeline19Q1 />,
            7: <InnerTimeline19Q2 />,
            8: <InnerTimeline19Q3 />,
            9: <InnerTimeline19Q4 />,
            10: <InnerTimeline20Q1 />,
            11: <InnerTimeline20Q2 />,
            12: <InnerTimeline20Q3 />,
            13: <InnerTimeline20Q4 />,
            14: <InnerTimeline21Q1 />,
            15: <InnerTimeline21Q2 />,
            16: <InnerTimeline21Q3 />,
            17: <InnerTimeline21Q4 />,
            18: <InnerTimeline22Q1 />,
            19: <InnerTimeline22Q2 />,
            20: <InnerTimeline22Q3 />,
            21: <InnerTimeline22Q4 />,
          }[state.value]
        }
      </div>
    </div>
  );
}

const InnerTimeline17Q3 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      0Chain founded Saswata Basu, CEO Tom Austin, CTO Prof in CS @SJSU
    </div>
  );
};

const InnerTimeline17Q4 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      0Chain whitepaper
    </div>
  );
};

const InnerTimeline18Q1 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Private raise
    </div>
  );
};
const InnerTimeline18Q2 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Storage & Consensus Protocol
    </div>
  );
};
const InnerTimeline18Q3 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Stateless Testnet 1,000,000,000 Transactions
    </div>
  );
};
const InnerTimeline18Q4 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Split-Key & Token Reward Protocol papers presented @ IEEE DappConn
    </div>
  );
};

const InnerTimeline19Q1 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Go SDK Alphanet
    </div>
  );
};
const InnerTimeline19Q2 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Private Sharing & Governance Protocol @ Marble Zwallet CLI for wallet
      transactions 0Wallet iOS & Android
    </div>
  );
};
const InnerTimeline19Q3 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Zbox CLI for storage
    </div>
  );
};
const InnerTimeline19Q4 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Oracle Blockchain Integration
    </div>
  );
};

const InnerTimeline20Q1 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      0Box Anonymous sharing Storage payment protocol 0Block, 0Search for rich
      storage query
    </div>
  );
};
const InnerTimeline20Q2 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      0Box iOS, Android 0Box Mac Sync BetaNet Vesting protocol
    </div>
  );
};
const InnerTimeline20Q3 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      0dns DNS server 0Box Windows Sync 0Wallet Staking
    </div>
  );
};
const InnerTimeline20Q4 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      0Stor UniSwap Liquidity
    </div>
  );
};

const InnerTimeline21Q1 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      0miner GoSDK Wasm Token Bridge Mainnet
    </div>
  );
};
const InnerTimeline21Q2 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Free Storage Protocol 0Lake on AWS Ocean Protocol Integration
    </div>
  );
};
const InnerTimeline21Q3 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Data Marketplace Protocol
    </div>
  );
};
const InnerTimeline21Q4 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Governance Protocol
    </div>
  );
};

const InnerTimeline22Q1 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Split-Key Wallet for ERC-20 tokens
    </div>
  );
};
const InnerTimeline22Q2 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      View Change
    </div>
  );
};
const InnerTimeline22Q3 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Data Marketplace Protocol
    </div>
  );
};
const InnerTimeline22Q4 = () => {
  return (
    <div className="h-50vh bg-gray-800 w-60vw text-white grid justify-center items-center">
      Governance Protocol
    </div>
  );
};
