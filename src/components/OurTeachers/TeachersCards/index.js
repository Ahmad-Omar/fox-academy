import React from "react";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Image from "../../../assets/images/teachers/teacher-1.jpg";

function TeachersCards() {
  return (
    <div className="teachers">
      <div className="teacher">
        <div className="picture-container">
          <div
            className="teacher-picture"
            style={{
              backgroundImage: `url(${Image})`,
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
          <h2 className="teacher-name">Bianca Wilson</h2>
          <span className="teacher-type">Teacher</span>
          <div className="teacher-excerpt">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </div>
        </div>
      </div>

      <div className="teacher">
        <div className="picture-container">
          <div className="teacher-picture"></div>
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
          <h2 className="teacher-name">Mitch Parker</h2>
          <span className="teacher-type">ENGLISH TEACHER</span>
          <div className="teacher-excerpt">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </div>
        </div>
      </div>

      <div className="teacher">
        <div className="picture-container">
          <div className="teacher-picture"></div>
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
          <h2 className="teacher-name">Stella Smith</h2>
          <span className="teacher-type">ART TEACHER</span>
          <div className="teacher-excerpt">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </div>
        </div>
      </div>

      <div className="teacher">
        <div className="picture-container">
          <div className="teacher-picture"></div>
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
          <h2 className="teacher-name">Monshe Henderson</h2>
          <span className="teacher-type">SCIENCE TEACHER</span>
          <div className="teacher-excerpt">
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachersCards;
