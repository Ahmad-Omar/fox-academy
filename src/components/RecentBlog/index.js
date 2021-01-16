import React from "react";
import "./style.css";
import SectionHeading from "../SectionHeading";
import BlogCards from "./BlogCards";

function RecentBlog() {
  return (
    <section className="recent-blog">
      <div className="wrapper">
        <SectionHeading
          title="Recent Blog"
          excerpt="Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country"
          width="shrink"
        />
        <BlogCards />
      </div>
    </section>
  );
}

export default RecentBlog;
