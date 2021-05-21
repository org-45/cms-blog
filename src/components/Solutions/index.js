import React from "react";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Solutions() {
  return (
    <div dir="rtl">
      <Tabs direction={"rtl"}>
        <TabList>
          <Tab>כותרת</Tab>
          <Tab disabled>כותרת כבויה</Tab>
          <Tab>כותרת שנייה</Tab>
          <Tab>כותרת שלישית</Tab>
        </TabList>
        <TabPanel>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
            דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה.
            דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
            אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי
            קלובר בריקנה סטום, לפריקך תצטריק לרטי.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
            דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה.
            דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
            אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי
            קלובר בריקנה סטום, לפריקך תצטריק לרטי.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
            דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה.
            דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
            אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי
            קלובר בריקנה סטום, לפריקך תצטריק לרטי. לורם איפסום דולור סיט אמט,
            קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר
            אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
            וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום
            בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך
            תצטריק לרטי. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי
            נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת
            לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס
            בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <h4>תת כותרת</h4>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
            דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה.
            דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
            אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי
            קלובר בריקנה סטום, לפריקך תצטריק לרטי. לורם איפסום דולור סיט אמט,
            קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר
            אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
            וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום
            בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך
            תצטריק לרטי.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

// const CustomTab = ({ children }) => (
//   <Tab>
//     <h1 className="text-white">{children}</h1>
//   </Tab>
// );

// CustomTab.tabsRole = "Tab"; // Required field to use your custom Tab

// const Solutions = () => (
//   <div className="grid justify-center w-full ">
//     <Tabs className="w-full">
//       <TabList className="">
//         <CustomTab>BlockChain</CustomTab>
//         <CustomTab>Social Media</CustomTab>
//         <CustomTab>Financials</CustomTab>
//         <CustomTab>Health Care</CustomTab>
//         <CustomTab>Supply Chain</CustomTab>
//       </TabList>
//       <TabPanel>
//         <BlockChain />
//       </TabPanel>
//       <TabPanel>
//         <SocialMedia />
//       </TabPanel>
//       <TabPanel>
//         <Financials />
//       </TabPanel>
//       <TabPanel>
//         <HealthCare />
//       </TabPanel>
//       <TabPanel>
//         <SupplyChain />
//       </TabPanel>
//     </Tabs>
//   </div>
// );

// export default Solutions;

// export const BlockChain = () => {
//   return (
//     <div className="bg-gray-800 w-screen h-70vh grid grid-cols-2">
//       <div className="grid bg-gray-100 justify-center items-center">
//         <div>a</div>
//         <div>a</div>
//         <div>a</div>
//       </div>
//       <div className="grid bg-gray-100 justify-center items-center">bcd</div>
//     </div>
//   );
// };

// export const SocialMedia = () => {
//   return <div>Hello from the SocialMedia component.</div>;
// };

// export const Financials = () => {
//   return <div>Hello from the Finanacials component.</div>;
// };

// export const HealthCare = () => {
//   return <div>Hello from the HealthCare component.</div>;
// };

// export const SupplyChain = () => {
//   return <div>Hello from the SupplyChain component.</div>;
// };
