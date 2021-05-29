import React from "react";
import PropTypes from "prop-types";

const Statistics = ({id, label, percentage }) => (
    
    <li class="item">
      <span class="label">{label}: </span>
      <span class="percentage">{percentage}%</span>
    </li>
 
);

Statistics.propTypes = {
    
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics;