import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import TimelinePageTemplate from "../components/TimelinePageTemplate";
import Layout from "../components/Layout";

const TimelinePage = () => {
  const data = useStaticQuery(graphql`
    query TimelineQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "timeline-page" } }) {
        frontmatter {
          meta_description
          meta_title
          title
          timeline {
            task_name
            task_id
            start_date(formatString: "YYYY-MM-DD")
            resource
            percentage_complete
            end_date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);

  const {
    meta_description,
    meta_title,
    timeline,
    title,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <TimelinePageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        timeline={[...timeline]}
      />
    </Layout>
  );
};

TimelinePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TimelinePage;
