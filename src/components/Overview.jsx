import React from "react";
import PropTypes from "prop-types";

export function Overview({ title, points }) {
  return (
    <section className="overview">
      {title && <h2 className="overview-title">{title}</h2>}
      <b>🛠️ Things we used to achieve the result:</b>
      {points && points.length > 0 && (
        <ul className="overview-points">
          {points.map((point, index) => (
            <li key={index} className="overview-point">
              <i class="ri-circle-fill"></i> {point}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

Overview.propTypes = {
  title: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string),
};

Overview.defaultProps = {
  title: "",
  points: [],
};
