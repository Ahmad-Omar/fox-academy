import React from "react";
import "./style.css";

function ContactMap() {
  return (
    <div className="contact-map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.3769078206315!2d35.2523733155078!3d32.22101651943247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEzJzE1LjYiTiAzNcKwMTUnMTYuNCJF!5e0!3m2!1sen!2s!4v1610916562179!5m2!1sen!2s"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
      ></iframe>
    </div>
  );
}

export default ContactMap;
