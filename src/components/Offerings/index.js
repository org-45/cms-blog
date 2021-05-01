import React from "react";
// import PropTypes from "prop-types";
import ProgressiveImageContainer from "../ProgressiveImageContainer";

const Offerings = (props) => {
  const { gridItems } = props;
  return (
    <div className="columns is-multiline">
      {gridItems.map((item, idx) => (
        <div key={idx} className="column is-4" style={{ borderRadius: "1px" }}>
          <section className="section">
            <div className="has-text-centered">
              <ProgressiveImageContainer
                image={item.image}
                alt={`gatsby-business-starter-${idx}`}
              />
            </div>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  );
};
// Offerings.propTypes = {
//   gridItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string,
//       text: PropTypes.string,
//     })
//   ),
// };

export default Offerings;
