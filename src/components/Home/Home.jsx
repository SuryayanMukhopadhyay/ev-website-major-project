import { React, useEffect } from "react";
import "./Home.css";
import "./HomeResponsive.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img1 from "./../../assets/Images/img1.jpg";
import img2 from "./../../assets/Images/img2.jpg";
import img3 from "./../../assets/Images/img3.jpg";
import img4 from "./../../assets/Images/img4.jpg";
import img5 from "./../../assets/Images/img5.jpg";
import logo from "./../Navbar/NavbarLogo.png";
import image1 from "./../../assets/Images/image1.jpeg";
import image2 from "./../../assets/Images/image2.jpg";
import image3 from "./../../assets/Images/image3.jpeg";
import image4 from "./../../assets/Images/image4.png";
import image5 from "./../../assets/Images/image5.png";
import { NavLink } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    document.title = "Rhyno EV - Elevate Your Ride Experience";
  }, []);
  const [text] = useTypewriter({
    words: ["Style", "Elegance", "Minimalism", "Comfort", "Performance"],
    loop: {},
    typeSpeed: 170,
    deleteSpeed: 170,
  });

  return (
    <>
      <div className="home">
        <div className="text-container">
          <h1>
            Let's Elevate Your Ride Experience With <br />
            <span>Rhyno</span>
          </h1>{" "}
        </div>
        <div className="container">
          <div className="icons">
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
          <div className="text-carousel">
            <div className="text-area">
              <img src={image1} alt="..." />
              <h2>LFP Battery</h2>
              <p>
                Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
                renowned for their safety features—eliminating the risk of fire
                associated with other Lithium batteries. These batteries boast a
                broader temperature range, ideal for the diverse Indian climate.
                Our technology enhances Rhyno's longevity, complemented by an
                Active Balancing Smart Battery Management System (BMS) for
                extended life and reduced maintenance. Each battery undergoes
                rigorous waterproofing tests according to IP76 standards.
              </p>
            </div>
            <div className="text-area">
              <img src={image2} alt="..." />
              <h2>Wider tyres</h2>
              <p>
                Now, say goodbye to skidding and embrace the leaning turns!
                Featuring first-of-its-kind, 9.5-inch wider tyres that make this
                machine an enormous beast that ensures stability on different
                terrains such as wet roads, mud, and sand.
              </p>
            </div>
            <div className="text-area">
              <img src={image3} alt="..." />
              <h2>Range prediction</h2>
              <p>
                Many budget-friendly electric scooters overlook this crucial
                feature, causing riders to experience range anxiety. With Rhyno,
                you can ride with peace of mind, thanks to the scooter providing
                precise information about the remaining battery.
              </p>
            </div>
            <div className="text-area">
              <img src={image4} alt="..." />
              <h2>Extraordinery Experience</h2>
              <p>
                Rhyno is more than just a mode of transportation. It is an
                experience of sheer comfort and style! A seamless fusion of
                minimalism, sophistication, and a touch of masculinity!
              </p>
            </div>
            <div className="text-area">
              <img src={image5} alt="..." />
              <h2>Rugged and simple Design</h2>
              <p>
                We’ve had enough of the EVs looking and feeling like fragile
                plastic toys. Often fading out and shamelessly breaking in minor
                accidents, ending up spending weeks and months at service
                stations for complex repairs. We took a bold step of making
                something raw, rugged, and practical. We kept it so simple that
                even your trusted local mechanic can understand and repair most
                of it. If you have reached this far, why not to take a test
                ride? Click here to locate your nearest dealership or book a
                test ride at your home!
              </p>
            </div>
          </div>
          <div className="image-carousel">
            <div className="images">
              <img src={img2} alt="..." />
              <img src={img1} alt="..." />
              <img src={img4} alt="..." />
              <img src={img3} alt="..." />
              <img src={img5} alt="..." />
            </div>
          </div>
        </div>
        <div className="changing-text">
          <h2>
            Where Superiority Meets {"  "}
            <span>{text}</span>
            <Cursor cursorStyle={""} />
          </h2>
          <NavLink to="/payment-gateway" className="pre-book">
            Pre Book <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
        <footer className="footer">
          <div className="website-policy">
            <p>
              Welcome to the Rhyno EV website. This website is operated by Rhyno
              EV. By accessing and using this website, you agree to comply with
              and be bound by the following policy. Please read this policy
              carefully. If you do not agree with any part of this policy,
              please do not use our website.
            </p>
            <ul className="web-pol-list">
              <li>
                Acceptance of Terms : By accessing and using the Rhyno EV
                website, you agree to be bound by this policy and any other
                policies or guidelines incorporated by reference.
              </li>
              <li>
                Changes to the Policy : Rhyno EV reserves the right to modify
                this policy at any time. Any changes will be effective
                immediately upon posting on the website. Your continued use of
                the website following the posting of changes constitutes your
                acceptance of such changes.
              </li>
              <li>
                Use of Content : You may not reproduce, distribute, or transmit
                any content from this website without the prior written consent
                of Rhyno EV. You may use the content solely for your personal,
                non-commercial use.
              </li>
              <li>
                Prohibited Activities : You agree not to use the website for any
                unlawful purpose or any purpose prohibited by this policy. You
                agree not to use the website in any manner that could damage,
                disable, overburden, or impair the website.
              </li>
              <li>
                Governing Law : This policy and any disputes related to it or
                the website shall be governed by and construed in accordance
                with the laws of the jurisdiction in which Rhyno EV operates,
                without regard to its conflict of law principles.
              </li>
            </ul>
            <p>
              By using the Rhyno EV website, you acknowledge that you have read,
              understood, and agreed to be bound by this policy.
            </p>
          </div>
          <div className="policy-columns">
            <img className="footer-logo" src={logo} alt="..." />
            <div className="cols">
              <ul>
                <li className="heading">
                  Policies
                  <ul>
                    <li>
                      <NavLink
                        to="/privacypolicy"
                        style={{
                          fontSize: "0.8rem",
                          color: "rgb(179, 179, 179)",
                        }}
                      >
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/refundpolicy"
                        style={{
                          fontSize: "0.8rem",
                          color: "rgb(179, 179, 179)",
                        }}
                      >
                        Refund Policy
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cols">
              <ul>
                <li className="heading">
                  Products
                  <ul>
                    <li>SE 03 Lite</li>
                    <li>SE 03</li>
                    <li>SE 03 Max</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cols">
              <ul>
                <li className="heading">
                  Services
                  <ul>
                    <li>
                      <a
                        href="https://in.linkedin.com/company/rhyno-wheels"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "0.8rem",
                          color: "rgb(179, 179, 179)",
                        }}
                      >
                        Career
                      </a>
                    </li>
                    <li>
                      <NavLink
                        to="/rentals"
                        style={{
                          fontSize: "0.8rem",
                          color: "rgb(179, 179, 179)",
                        }}
                      >
                        Rentals
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cols">
              <ul>
                <li className="heading">
                  Contact Us
                  <ul>
                    <li>
                      <i className="fa-regular fa-envelope"></i> Mail :
                      info@rhyno.in
                    </li>
                    <li>
                      <i className="fa-solid fa-mobile-screen"></i>Mobile number
                      : +91-9023987528
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="cols">
              <ul>
                <li className="heading">
                  Socials
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/rhyno.in/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://in.linkedin.com/company/rhyno-wheels"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <h3>
              {" "}
              Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
              Raisan, Gandhinagar, Gujarat, India.
            </h3>
          </div>
          <div className="line"></div>
          <div className="rights">
            <h3>© 2024. Rhyno EV Solutions Private Limited.</h3>
            <span> | </span>
            <h3>All Rights Reserved.</h3>
          </div>
        </footer>
      </div>
    </>
  );
};
