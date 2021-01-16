import React from "react";
import "./style.css";
import { ReactComponent as TrainingIcon } from "../../../../assets/icons/hero-boxes/training.svg";
import { ReactComponent as LibraryIcon } from "../../../../assets/icons/hero-boxes/books.svg";
import { ReactComponent as TeacherIcon } from "../../../../assets/icons/hero-boxes/teacher.svg";

function Boxes() {
  return (
    <section className="hero-boxes">
      <div className="wrapper">
        <div className="boxes-container">
          <div className="box-item">
            <TrainingIcon />
            <div className="box-text">
              <h4>Online Courses</h4>
              <a href="/">View more</a>
            </div>
          </div>

          <div className="box-item">
            <LibraryIcon />
            <div className="box-text">
              <h4>Our Library</h4>
              <a href="/">View more</a>
            </div>
          </div>

          <div className="box-item">
            <TeacherIcon />
            <div className="box-text">
              <h4>Our Teachers</h4>
              <a href="/">View more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boxes;
