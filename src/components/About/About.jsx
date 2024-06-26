import { React, useEffect } from "react";
import "./About.css";
import logo from "./../Navbar/NavBarLogoBlack.png";
import design from "./design.png";
import design2 from "./design2.png";

export const About = () => {
  useEffect(() => {
    document.title = "About Us | Rhyno EV";
  }, []);

  return (
    <>
      <section className="about">
        <div className="icons-about">
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
            Know More About <span>Us!</span>
          </h1>
          <p>
            Established in 2019 by an automotive engineer with a vision for
            sustainable and robust mobility solutions, Rhyno EV is not just a
            company; it's a collective effort of a dynamic team of young
            individuals passionately driving innovation in the electric vehicle
            industry. We believe in engineering solutions that solve problems.
          </p>
          <br />
          <p>
            With our first product, we've taken a bold step to create something
            more than just a vehicle; it's a unique experience of elegance,
            comfort and style, addressing the pitfalls of conventional electric
            scooters. Our design prioritizes safety, eliminating concerns of
            fires and ensuring a longer battery lifespan with our battery
            technology. Perfectly suited for fleet operators, especially in
            tourist-centric locations like Goa, our rugged yet aesthetically
            appealing scooters are engineered for longevity and reliability.
            Join us as we pioneer a new era in sustainable and dependable
            electric transportation.
          </p>
        </div>
        <div className="image-section">
          <img src={logo} alt="..." />
        </div>
        <img src={design2} alt="..." className="design2" />
      </section>
    </>
  );
};
