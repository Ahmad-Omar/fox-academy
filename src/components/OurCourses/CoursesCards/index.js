import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../../../firebase";
import "./style.css";
import PersonIcon from "@material-ui/icons/Person";
import ViewComfyOutlinedIcon from "@material-ui/icons/ViewComfyOutlined";
import EventIcon from "@material-ui/icons/Event";
import MainButton from "../../MainButton";

function CoursesCards() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    db.collection("courses")
      .get()
      .then((querySnapshot) => {
        const getData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCourses(getData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="courses">
      {courses.map((course) => (
        <div className="course" key={course.id}>
          <div className="course-image">
            <img src={course.img_url} alt="course" />
          </div>
          <div className="course-meta">
            <div className="author">
              <PersonIcon />
              {course.teacher}
            </div>
            <div className="seats">
              <ViewComfyOutlinedIcon />
              {course.seats_no}
            </div>
            <div className="duration">
              <EventIcon />
              {course.duration}
            </div>
          </div>
          <div className="course-body">
            <h3 className="course-title">{course.name}</h3>
            <p className="course-excerpt">{course.details}</p>
            <MainButton text="Apply now" size="small" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesCards;
