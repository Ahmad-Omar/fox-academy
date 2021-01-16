import React from "react";
import "./style.css";
import blog1 from "../../../assets/images/blogs/blog_1.jpg";
import blog2 from "../../../assets/images/blogs/blog_2.jpg";
import blog3 from "../../../assets/images/blogs/blog_3.jpg";
import ChatIcon from "@material-ui/icons/Chat";
import MainButton from "../../MainButton";

function BlogCards() {
  return (
    <div className="blogs">
      <div className="blog-card">
        <div className="blog-head">
          <div className="blog-image">
            <img src={blog1} alt="img1" />
          </div>
          <div className="blog-date">
            <span>10</span>
            <span>Jan</span>
            <span>2021</span>
          </div>
        </div>

        <div className="blog-body">
          <h3 className="blog-title">Skills To Develop Your Child Memory</h3>
          <p className="blog-excerpt">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="blog-footer">
            <MainButton text="Read More" size="small" icon="icon" />
            <div className="blog-meta">
              <div className="blog-author">Admin</div>
              <div className="blog-comments">
                <ChatIcon /> 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-card">
        <div className="blog-head">
          <div className="blog-image">
            <img src={blog2} alt="img1" />
          </div>
          <div className="blog-date">
            <span>10</span>
            <span>Jan</span>
            <span>2021</span>
          </div>
        </div>

        <div className="blog-body">
          <h3 className="blog-title">Skills To Develop Your Child Memory</h3>
          <p className="blog-excerpt">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="blog-footer">
            <MainButton text="Read More" size="small" icon="icon" />
            <div className="blog-meta">
              <div className="blog-author">Admin</div>
              <div className="blog-comments">
                <ChatIcon /> 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-card">
        <div className="blog-head">
          <div className="blog-image">
            <img src={blog3} alt="img1" />
          </div>
          <div className="blog-date">
            <span>10</span>
            <span>Jan</span>
            <span>2021</span>
          </div>
        </div>

        <div className="blog-body">
          <h3 className="blog-title">Skills To Develop Your Child Memory</h3>
          <p className="blog-excerpt">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="blog-footer">
            <MainButton text="Read More" size="small" icon="icon" />
            <div className="blog-meta">
              <div className="blog-author">Admin</div>
              <div className="blog-comments">
                <ChatIcon /> 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
