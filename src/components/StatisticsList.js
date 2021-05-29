import React from "react";
import PropTypes from "prop-types";
import Statistics from "../components/Statistics";

const StatisticsList = ({items}) => (
    <ul class="stat-list">
    {items.map(({label, percentage}, index) => (
        
            <Statistics
            key={index}
            label={label}
            percentage={percentage}
          />
        ))
       }
  </ul>
);


export default StatisticsList;