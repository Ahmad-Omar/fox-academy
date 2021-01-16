import React from "react";
import "./style.css";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

function FormMapSection() {
  return (
    <section className="contact-form__map">
      <div className="wrapper">
        <div className="form_map-container">
          <ContactMap />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default FormMapSection;
