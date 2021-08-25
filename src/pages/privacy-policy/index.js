import React from "react";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
// import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Helmet title={`0Chain | Privacy Policy`} />
      <div className="grid p-40">
        <div className=" text-5xl font-black  justify-center items-center grid">
          {" "}
          0Chain.net Privacy Policy
        </div>
        <div className="grid p-40 justify-start items-start bg-gray-100 m-10">
          <p>Last updated: July 26, 2019</p>
          <p>
            This Privacy Policy (“Policy”) describes how information about you
            is collected, used, and disclosed by 0Chain and its subsidiaries and
            affiliated companies (“Company,” “we,” “us,” “our”) when you
            register for or participate in the Hackathon and Bugathon, or as a
            Service Provider, or when you use any of our products such as 0Box,
            0Wallet, 0ChainNet (including AlphaNet and BetaNet, or any other
            networks associated with 0Chain) promoted on our website
            https://www.0chain.net/ (“Site”) and interact with the Site.
          </p>
          <p>Collection of Information</p>
          <p>Information You Provide to Us</p>
          <p>
            We may collect information you provide directly to us. For example,
            we collect information when you express interest or register for our
            Hackathon and Bugathon. The types of information collected include,
            but are not limited to: your name, entity name, physical address,
            telephone number(s), email address, date of birth, government-issued
            photo identification or other identification, account numbers,
            gender, nationality, country of residence, and cryptocurrency
            addresses.
          </p>
          <p>
            Our third-party service provider may collect your payment method
            information for use in connection with your payments.
          </p>
          <p>Information We Collect Automatically</p>
          <p>
            {" "}
            When you access our Site, we may automatically collect information
            about you, including but not limited to:
          </p>
          <p>
            {" "}
            Log information: We may collect log information about your use of
            our Site. Such information may include: the type of browser you are
            using, access times, pages viewed, your IP address, and the pages
            you visited before or after navigating to our Site. Device
            information: We may collect information about the device you use to
            access our Site. Such information may include: the hardware model,
            operating system and version, unique device identifiers, and mobile
            network information. Usage information: We may collect information
            contained in or relating to any communication that you send to us or
            send through our Site, as well as meta-data associated with the
            communication. Location information: We may collect information
            about the location of your device each time you access or use one of
            our mobile applications or otherwise consent to the collection of
            this information. Information Collected by Cookies and Other
            Tracking Technologies: We and our third-party vendors may use
            various technologies to collect information, including cookies and
            web beacons. Cookies are small data files stored on your hard drive
            or in device memory that helps us improve the Site and your
            experience, see which features of the Site are popular, and count
            visits. Web beacons are electronic images that may be used on our
            Site or in emails to help deliver cookies, count visits, and
            understand usage and campaign effectiveness. We may later associate
            the usage and other information we collect with personal information
            about you, as permitted or required by law.
          </p>
          <p> Information We Collect From Other Sources</p>
          <p>
            {" "}
            We may also collect information about you from additional online and
            offline sources including commercially available third-party sources
            such as consumer reporting agencies. We may combine this information
            with other information we have collected about you under this
            Policy.
          </p>
          <p> Use of Information</p>
          <p>
            {" "}
            We may use information about you for various purposes, including to:
          </p>
          <p>Conduct our Hackathon and Bugathon;</p>
          <p>
            Evaluate and determine your eligibility to participate in our
            Hackathon and Bugathon; Send you notices, updates, security alerts,
            and support and administrative messages; Respond to your comments,
            questions, and requests and provide customer service; Detect,
            investigate, and prevent fraudulent transactions or other unlawful
            activities, and protect the rights and property of the Company and
            others; and Carry out any other purpose for which the information
            was collected. We may also use data that we collect on an aggregate
            or de-identified basis for various business purposes, where
            permissible under applicable laws and regulations.
          </p>
          <p> Sharing of Information</p>
          <p>
            {" "}
            We may share information about you as follows, or as otherwise
            described in this Policy:
          </p>

          <p>
            {" "}
            With service providers who need access to such information to carry
            out work on our behalf; In response to a request for information if
            we believe disclosure is in accordance with, or required by, any
            applicable law, regulation, or legal process; If we believe your
            actions are inconsistent with our terms or policies, or to protect
            the rights, property, and safety of the Company or other parties; In
            connection with, or during negotiations of, any merger, sale of
            Company assets, financing, or acquisition of all or a portion of our
            business by another company; Between and among the Company and our
            current and future parents, affiliates, subsidiaries, and other
            companies under common control and ownership; and With your consent
            or at your direction. We may also share aggregated or de-identified
            information, which cannot reasonably be used to identify you
          </p>
          <p>Security</p>
          <p>
            {" "}
            We take our responsibility to protect the privacy and
            confidentiality of your information, including personal information,
            seriously. We take reasonable measures to help protect information
            about you from loss, theft, misuse, and unauthorized access,
            disclosure alteration, and destruction.
          </p>
          <p> Changes</p>
          <p>
            {" "}
            We may change this Policy from time to time. If we make changes, our
            notification will consist of changing the date on the top of the
            policy. While in some cases, and at our discretion, we may provide
            you with additional notice, we encourage you to review the most
            up-to-date Policy whenever you access our Site. All changes will
            become effective when posted unless indicated otherwise.
          </p>
          <p> Your Choices</p>
          <p>
            {" "}
            You may request that the Company update or correct information about
            you at any time by emailing us at zero@0Chain.net. We may retain
            certain information as required by law or for legitimate business
            purposes. We may also retain cached or archived copies of
            information about you for a certain period of time.
          </p>
          <p>Contact Us</p>
          <p>
            If you have any questions about this Policy, please contact
            legal@0Chain.net.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default PrivacyPolicyPage;
