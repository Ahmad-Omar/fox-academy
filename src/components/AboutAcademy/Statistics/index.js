import React from "react";
import "./style.css";

function Statistics() {
  return (
    <div className="statistics">
      <div className="statistic">
        <h4 className="stat-number">18</h4>
        <p className="stat-label">Certified Teachers</p>
      </div>

      <div className="statistic">
        <h4 className="stat-number">401</h4>
        <p className="stat-label">Students</p>
      </div>

      <div className="statistic">
        <h4 className="stat-number">30</h4>
        <p className="stat-label">Courses</p>
      </div>

      <div className="statistic">
        <h4 className="stat-number">50</h4>
        <p className="stat-label">Awards Won</p>
      </div>
    </div>
  );
}

export default Statistics;
