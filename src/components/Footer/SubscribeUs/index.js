import React from "react";
import "./style.css";

function SubscribeUs() {
  return (
    <div className="subscribe">
      <h2 className="footer-heading">Subscribe Us!</h2>
      <form>
        <input type="email" placeholder="Enter email address" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
}

export default SubscribeUs;
