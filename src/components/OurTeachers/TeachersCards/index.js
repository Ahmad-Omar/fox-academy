import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../../../firebase";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

function TeachersCards() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    db.collection("teachers")
      .get()
      .then((querySnapshot) => {
        const getData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log();
        setTeachers(getData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="teachers">
      {teachers.map((teacher) => (
        <div className="teacher" key={teacher.id}>
          <div className="picture-container">
            <div
              className="teacher-picture"
              style={{
                backgroundImage: `url(${teacher.img_url})`,
              }}
            ></div>
          </div>
          <div className="teacher-body">
            <div className="teacher-social">
              <ul>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <FacebookIcon />
                </li>
                <li>
                  <GitHubIcon />
                </li>
                <li>
                  <InstagramIcon />
                </li>
              </ul>
            </div>
            <h2 className="teacher-name">{teacher.name}</h2>
            <span className="teacher-type">{teacher.profession}</span>
            <div className="teacher-excerpt">{teacher.brief}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeachersCards;
