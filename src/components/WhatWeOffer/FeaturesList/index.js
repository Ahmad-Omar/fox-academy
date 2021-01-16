import React from "react";
import "./style.css";
import { ReactComponent as SafetyIcon } from "../../../assets/icons/whatweoffers/safety.svg";
import { ReactComponent as RegularIcon } from "../../../assets/icons/whatweoffers/regular.svg";
import { ReactComponent as TeacherIcon } from "../../../assets/icons/whatweoffers/teacher.svg";
import { ReactComponent as ClassroomIcon } from "../../../assets/icons/whatweoffers/clasess.svg";
import { ReactComponent as CreativeIcon } from "../../../assets/icons/whatweoffers/creative.svg";
import { ReactComponent as SportsIcon } from "../../../assets/icons/whatweoffers/sports.svg";

function FeaturesList() {
  return (
    <div className="features">
      <div className="feature">
        <div className="feature-icon">
          <SafetyIcon />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">Safety First</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia.
          </p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <RegularIcon />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">Regular Classes</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia.
          </p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <TeacherIcon />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">Certified Teachers</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia.
          </p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <ClassroomIcon />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">Sufficient Classrooms</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia.
          </p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <CreativeIcon />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">Creative Lessons</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia.
          </p>
        </div>
      </div>

      <div className="feature">
        <div className="feature-icon">
          <SportsIcon />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">Sports Facilities</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesList;
