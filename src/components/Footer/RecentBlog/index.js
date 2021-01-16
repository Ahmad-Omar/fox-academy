import React from "react";
import "./style.css";
import blog1 from "../../../assets/images/blogs/blog_1.jpg";
import blog2 from "../../../assets/images/blogs/blog_2.jpg";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";

function RecentBlog() {
  return (
    <div className="recent-blogs">
      <h2 className="footer-heading">Recent Blog</h2>
      <div className="blogs">
        <div className="blog">
          <div className="blog-image">
            <img src={blog1} alt="blog1" />
          </div>
          <div className="blog-body">
            <h3 className="blog-title">
              Even the all-powerful Pointing has no control about
            </h3>
            <div className="blog-meta">
              <div className="f-blog-date">
                <DateRangeRoundedIcon />
                Jan 11, 2021
              </div>
              <div>
                <div className="f-blog-author">
                  <PersonRoundedIcon />
                  Admin
                </div>
                <div className="f-blog-comment">
                  <ChatRoundedIcon />
                  19
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="blog-image">
            <img src={blog2} alt="blog2" />
          </div>
          <div className="blog-body">
            <h3 className="blog-title">
              Even the all-powerful Pointing has no control about
            </h3>
            <div className="blog-meta">
              <div className="f-blog-date">
                <DateRangeRoundedIcon />
                Jan 11, 2021
              </div>
              <div>
                <div className="f-blog-author">
                  <PersonRoundedIcon />
                  Admin
                </div>
                <div className="f-blog-comment">
                  <ChatRoundedIcon />
                  19
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
