import React from "react";
import "./style.css";
import course1 from "../../../assets/images/courses/course-1.jpg";
import course2 from "../../../assets/images/courses/course-2.jpg";
import course3 from "../../../assets/images/courses/course-3.jpg";
import course4 from "../../../assets/images/courses/course-4.jpg";
import PersonIcon from "@material-ui/icons/Person";
import ViewComfyOutlinedIcon from "@material-ui/icons/ViewComfyOutlined";
import EventIcon from "@material-ui/icons/Event";
import MainButton from "../../MainButton";

function CoursesCards() {
  return (
    <div className="courses">
      <div className="course">
        <div className="course-image">
          <img src={course1} alt="img1" />
        </div>
        <div className="course-meta">
          <div className="author">
            <PersonIcon />
            Mr. Khan
          </div>
          <div className="seats">
            <ViewComfyOutlinedIcon />
            10 Seats
          </div>
          <div className="duration">
            <EventIcon />4 Years
          </div>
        </div>
        <div className="course-body">
          <h3 className="course-title">Electric Engineering</h3>
          <p className="course-excerpt">
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
          <MainButton text="Apply now" size="small" />
        </div>
      </div>

      <div className="course">
        <div className="course-image">
          <img src={course2} alt="img2" />
        </div>
        <div className="course-meta">
          <div className="author">
            <PersonIcon />
            Mr. Khan
          </div>
          <div className="seats">
            <ViewComfyOutlinedIcon />
            10 Seats
          </div>
          <div className="duration">
            <EventIcon />4 Years
          </div>
        </div>
        <div className="course-body">
          <h3 className="course-title">Electric Engineering</h3>
          <p className="course-excerpt">
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
          <MainButton text="Apply now" size="small" />
        </div>
      </div>

      <div className="course">
        <div className="course-image">
          <img src={course3} alt="img3" />
        </div>
        <div className="course-meta">
          <div className="author">
            <PersonIcon />
            Mr. Khan
          </div>
          <div className="seats">
            <ViewComfyOutlinedIcon />
            10 Seats
          </div>
          <div className="duration">
            <EventIcon />4 Years
          </div>
        </div>
        <div className="course-body">
          <h3 className="course-title">Electric Engineering</h3>
          <p className="course-excerpt">
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
          <MainButton text="Apply now" size="small" />
        </div>
      </div>

      <div className="course">
        <div className="course-image">
          <img src={course4} alt="img4" />
        </div>
        <div className="course-meta">
          <div className="author">
            <PersonIcon />
            Mr. Khan
          </div>
          <div className="seats">
            <ViewComfyOutlinedIcon />
            10 Seats
          </div>
          <div className="duration">
            <EventIcon />4 Years
          </div>
        </div>
        <div className="course-body">
          <h3 className="course-title">Electric Engineering</h3>
          <p className="course-excerpt">
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
          <MainButton text="Apply now" size="small" />
        </div>
      </div>
    </div>
  );
}

export default CoursesCards;
