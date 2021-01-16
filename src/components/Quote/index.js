import React from "react";
import "./style.css";
import SectionHeading from "../SectionHeading";
import QuoteForm from "./QuoteForm";

function Quote() {
  return (
    <section className="quote">
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="quote-container">
          <div className="right-content">
            <SectionHeading
              title="Request A Quote"
              excerpt="Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts."
              color="white"
              align="left"
            />
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
