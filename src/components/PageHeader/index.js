import React from "react";
import "./style.css";

function PageHeader(props) {
  return (
    <section className="page-header">
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="page-header-content">
          <h2 className="page-title">{props.page_title}</h2>
          {/* <div className="breadcrumb">Home &#62; Contact Us &#62;</div> */}
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
