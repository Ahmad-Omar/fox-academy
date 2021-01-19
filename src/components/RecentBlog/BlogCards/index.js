import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../../../firebase";
import "./style.css";
import ChatIcon from "@material-ui/icons/Chat";
import MainButton from "../../MainButton";

function BlogCards() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    db.collection("blogs")
      .get()
      .then((querySnapshot) => {
        const getData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogs(getData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <div className="blog-head">
            <div className="blog-image">
              <img src={blog.img_url} alt="blog" />
            </div>
            <div className="blog-date">
              <span>{new Date(blog.date.seconds * 1000).getDate()}</span>
              <span>
                {new Intl.DateTimeFormat("en-US", { month: "short" }).format(
                  new Date(blog.date.seconds * 1000).getMonth()
                )}
              </span>
              <span>{new Date(blog.date.seconds * 1000).getFullYear()}</span>
            </div>
          </div>
          <div className="blog-body">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-excerpt">{blog.content}</p>
            <div className="blog-footer">
              <MainButton text="Read More" size="small" icon="icon" />
              <div className="blog-meta">
                <div className="blog-author">{blog.author}</div>
                <div className="blog-comments">
                  <ChatIcon />
                  {blog.comments}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCards;
