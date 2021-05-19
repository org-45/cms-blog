import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import TimelinePageTemplate from "../components/TeamPageTemplate";
import Layout from "../components/Layout";

const TimelinePage = (props) => {
  console.log(props, "timeline props must have data");
  return (
    <Layout>
      {/* <TimelinePageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        timeline={[...timeline]}
      /> */}
      timeline
    </Layout>
  );
};

// TimelinePage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

export default TimelinePage;

export const timelinePageQuery = graphql`
  query TimelineQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "timeline-page" } }) {
      frontmatter {
        meta_description
        meta_title
        title
        timeline {
          task_name
          task_id
          resource
          percentage_complete
        }
      }
    }
  }
`;
