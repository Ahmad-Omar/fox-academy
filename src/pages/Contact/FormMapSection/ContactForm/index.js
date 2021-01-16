import React from "react";
import "./style.css";
import MainButton from "../../../../components/MainButton";

function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" />
        <MainButton text="Send Message" size="big" width="45%" />
      </form>
    </div>
  );
}

export default ContactForm;
