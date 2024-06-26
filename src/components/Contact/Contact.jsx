import { React, useEffect } from "react";
import logo from "./../Navbar/NavBarLogoBlack.png";
import design from "./../About/design.png";
import design2 from "./../About/design2.png";
import "./Contact.css";

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Rhyno EV";
  }, []);
  return (
    <section className="contact">
      <div className="icons-contact">
        <a
          href="https://www.instagram.com/rhyno.in/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram icon1"></i>
        </a>
        <a
          href="https://in.linkedin.com/company/rhyno-wheels"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin icon2"></i>
        </a>
      </div>
      <img src={design} alt="..." className="design1" />
      <div className="text-section">
        <h1>
          Contact <span>Us!</span>
        </h1>
        <h2>Email Us</h2>
        <p>info@rhyno.in</p>
        <h2>Call Us</h2>
        <p>+91-9023987528</p>
        <h2>Location</h2>
        <p>
          Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
          Raisan, Gandhinagar, Gujarat, India.
        </p>
      </div>
      <div className="contact-image-section">
        <img src={logo} alt="..." />
      </div>
      <img src={design2} alt="..." className="design2" />
    </section>
  );
};
