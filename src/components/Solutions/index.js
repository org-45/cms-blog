import React from "react";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useWindowSize from "/screenSize.js";
// import { useDeviceDetect } from "/screenSize.js";

//blockchain
import BlockChainSolution from "/static/img/gfx/blockchain_integration.png";
import BCS1 from "/static/img/gfx/msp/blockchain/0box-Icons_protect-original-content.svg";
import BCS2 from "/static/img/gfx/msp/blockchain/0chain_Icons_privacy-data-compliance.svg";
import BCS3 from "/static/img/gfx/msp/blockchain/0chain_Icons_fast-easy-record-transfer.svg";

//social media
import SocialMediaSolution from "/static/img/gfx/msp/0chain-privacy.png";
import SMS1 from "/static/img/gfx/msp/blockchain/msps_liability.svg";
import SMS2 from "/static/img/gfx/msp/blockchain/0chain_Icons_privacy-data-compliance.svg";
import SMS3 from "/static/img/gfx/msp/blockchain/0chain Icons_protect-brand.svg";

//health care
import HealthCareSolution from "/static/img/gfx/msp/0chain-healthcare.png";
import HCS1 from "/static/img/gfx/msp/blockchain/0box-Icons_protect-original-content.svg";
import HCS2 from "/static/img/gfx/msp/blockchain/0chain_Icons_privacy-data-compliance.svg";
import HCS3 from "/static/img/gfx/msp/blockchain/0chain_Icons_fast-easy-record-transfer.svg";

//Financials
import FinancialSolution from "/static/img/gfx/msp/0chain-identity.png";
import FS1 from "/static/img/gfx/msp/blockchain/0chain Icons_prevent-fraud.svg";
import FS2 from "/static/img/gfx/msp/blockchain/0chain_Icons_privacy-data-compliance.svg";
import FS3 from "/static/img/gfx/msp/blockchain/0chain Icons_secured-sharing.svg";

//supply chain
import SupplyChainSolution from "/static/img/gfx/msp/0chain-supplychain.png";
import SCS1 from "/static/img/gfx/msp/blockchain/0chain Icons_protect-brand.svg";
import SCS2 from "/static/img/gfx/msp/blockchain/msps_liability.svg";
import SCS3 from "/static/img/gfx/msp/blockchain/0chain Icons_prevent-fraud.svg";

const Solutions = () => {
  const { width } = useWindowSize();
  // const { isMobile } = useDeviceDetect();

  return (
    <div className="grid justify-center w-full ">
      <Tabs className="w-full">
        <TabList className="">
          <Tab>BlockChain</Tab>
          <Tab>Social Media</Tab>
          <Tab>Supply Chain</Tab>
          <Tab>Financials</Tab>
          <Tab>Health Care</Tab>
        </TabList>
        <TabPanel>{width > 1300 ? <LBlockChain /> : <MBlockChain />}</TabPanel>
        <TabPanel>
          <SocialMedia />
        </TabPanel>
        <TabPanel>
          <SupplyChain />
        </TabPanel>
        <TabPanel>
          <Financials />
        </TabPanel>
        <TabPanel>
          <HealthCare />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Solutions;

/* Larger Screen Blockchain */
export const LBlockChain = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-3 text-black">
      <div className="grid bg-gray-100 justify-center items-center">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={BCS1} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-xl">No Censorship</div>
            <div className="text-center">Prevent data breach</div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={BCS2} alt="b icon" height="100px" width="100px" />
          </div>
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
          <div className="grid">
            <img src={BCS3} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">Private Sharing</div>
            <div className="text-center">Fast, secured file sharing</div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-gray-100 justify-self-center items-self-center">
        <img src={BlockChainSolution} alt="block chain" />
      </div>
    </div>
  );
};

/* Mobile Screen Blockchain */
export const MBlockChain = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-1 text-black">
      <div className=" bg-gray-100  ">
        <img src={BlockChainSolution} alt="block chain " />
      </div>
      <div className="grid bg-gray-100 justify-center items-center ">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={BCS1} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold ">No Censorship</div>
            <div className="text-center">Prevent data breach</div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={BCS2} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center ">Privacy Compliance</div>
            <div className="text-center">
              User owns data. Immutable record of activities
            </div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={BCS3} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center ">Private Sharing</div>
            <div className="text-center">Fast, secured file sharing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SocialMedia = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-3 text-black">
      <div className="grid bg-gray-100 justify-center items-center">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={SMS1} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-xl">Zero Liability</div>
            <div className="text-center">
              Prevent data breach. User owns data
            </div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={SMS2} alt="b icon" height="100px" width="100px" />
          </div>
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
          <div className="grid">
            <img src={SMS3} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">Enhance Brand</div>
            <div className="text-center">
              Achieve high quality brand leadership
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-gray-100 justify-self-center items-self-center">
        <img src={SocialMediaSolution} alt="block chain" />
      </div>
    </div>
  );
};

export const Financials = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-3 text-black">
      <div className="grid bg-gray-100 justify-center items-center">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={FS1} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-xl">Prevent fraud</div>
            <div className="text-center">Easy verification</div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={FS2} alt="b icon" height="100px" width="100px" />
          </div>
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
          <div className="grid">
            <img src={FS3} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">
              Easy Identity sharing
            </div>
            <div className="text-center">Fast, secured file sharing</div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-gray-100 justify-self-center items-self-center">
        <img src={FinancialSolution} alt="block chain" />
      </div>
    </div>
  );
};

export const HealthCare = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-3 text-black">
      <div className="grid bg-gray-100 justify-center items-center">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={HCS1} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-xl">Prevent Breach</div>
            <div className="text-center">
              Protection against internal hackers
            </div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={HCS2} alt="b icon" height="100px" width="100px" />
          </div>
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
          <div className="grid">
            <img src={HCS3} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">Secured Sharing</div>
            <div className="text-center">Fast, secured file sharing</div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-gray-100 justify-self-center items-self-center">
        <img src={HealthCareSolution} alt="block chain" className=" h-70vh" />
      </div>
    </div>
  );
};

export const SupplyChain = () => {
  return (
    <div className="bg-gray-100 w-screen h-70vh grid grid-cols-3 text-black">
      <div className="grid bg-gray-100 justify-center items-center">
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={SCS1} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-xl">Enhance brand</div>
            <div className="text-center">
              Achieve high quality brand leadership
            </div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={SCS2} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">Zero liability</div>
            <div className="text-center">Immutable records of shipments</div>
          </div>
        </div>
        <div className="bg-green-100 justify-center items-center  grid grid-cols-4">
          <div className="grid">
            <img src={SCS3} alt="b icon" height="100px" width="100px" />
          </div>
          <div className="col-span-3 justify-self-center items-self-center">
            <div className="font-bold text-center text-xl">Prevent fraud</div>
            <div className="text-center">Easy end customer verification</div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-gray-100 justify-self-center items-self-center">
        <img src={SupplyChainSolution} alt="block chain " />
      </div>
    </div>
  );
};
