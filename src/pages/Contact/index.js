import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactInfoBoxes from "./ContactInfoBoxes";
import FormMapSection from "./FormMapSection";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <>
      <PageHeader page_title="Contact Us" />
      <ContactInfoBoxes />
      <FormMapSection />
      <Footer />
    </>
  );
}

export default Contact;
