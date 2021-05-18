import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Helmet title={`0Box`} />
      <div>Welcome to the Privacy Policy page.</div>
    </Layout>
  );
};
export default PrivacyPolicyPage;
