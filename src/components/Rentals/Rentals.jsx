import { React, useEffect } from "react";
import "./Rentals.css";
import design from "./../About/design.png";
import design2 from "./../About/design2.png";
import logo from "./../Navbar/NavBarLogoBlack.png";

export const Rentals = () => {
  useEffect(() => {
    document.title = "Rentals Services | Rhyno EV";
  }, []);
  return (
    <section className="rentals">
      <img src={design} alt="..." className="design1" />
      <div className="rentals-text">
        <p>
          Explore the roars of Rhyno at your own pace with our rental options!
          Test the waters with our flexible rental model, available for a week
          or a month, allowing you to experience the Rhyno first hand before
          committing. Simply visit our authorized dealerships to unlock this
          opportunity.
        </p>
        <br />
        <p>
          Additionally, we're redefining campus commuting with our rental fleet
          tailored for college students. Navigate your daily commute
          effortlessly by renting Rhyno vehicles on an hourly basis through our
          user-friendly mobile app. Embrace the freedom to ride and explore a
          new dimension in sustainable and convenient transportation.
        </p>
        <h1>
          Download our rental app : <i className="fa-brands fa-android"></i>{" "}
          Android | <i className="fa-brands fa-apple"></i>Apple
        </h1>
      </div>
      <div className="rental-image-section">
        <img src={logo} alt="..." />
      </div>
      <img src={design2} alt="..." className="design2" />
    </section>
  );
};
