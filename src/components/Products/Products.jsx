import { React, useEffect, useState } from "react";
import "./Products.css";
import "./ProductsResponsive.css";
import design from "./../About/design.png";
import liteBody from "./Product images/SE 03 Lite/SE 03 Lite Body.png";
import liteBlue from "./Product images/SE 03 Lite/SE 03 Lite part_blue.png";
import liteRed from "./Product images/SE 03 Lite/SE 03 Lite part_red.png";
import liteGrey from "./Product images/SE 03 Lite/SE 03 Lite part_white.png";
import seBody from "./Product images/SE 03/SE 03 Body.png";
import seBlue from "./Product images/SE 03/SE 03 part_blue.png";
import seRed from "./Product images/SE 03/SE 03 part_red.png";
import seBlack from "./Product images/SE 03/SE 03 part_black.png";
import seGold from "./Product images/SE 03/SE 03 part_golden.png";
import seOlive from "./Product images/SE 03/SE 03 part_olive.png";
import seGrey from "./Product images/SE 03/SE 03 part_white.png";
import maxBody from "./Product images/SE 03 Max/SE 03 MAX Body.png";
import maxBlue from "./Product images/SE 03 Max/SE 03 Max part_blue.png";
import maxBrown from "./Product images/SE 03 Max/SE 03 Max part_brown.png";
import maxGrey from "./Product images/SE 03 Max/SE 03 Max part_grey.png";
import maxRed from "./Product images/SE 03 Max/SE 03 Max part_red.png";
import image1 from "./Compare Images/image1.jpg";
import image2 from "./Compare Images/image2.jpg";
import image3 from "./Compare Images/image3.jpg";
import { NavLink } from "react-router-dom";

export const Products = () => {
  useEffect(() => {
    document.title = "Our Products | Rhyno EV";
  }, []);

  const [lite, setLite] = useState(liteBlue);
  const [se, setSe] = useState(seBlue);
  const [max, setMax] = useState(maxBlue);

  const changeLiteColor = (event) => {
    if (event.target.className === "lite-color1") {
      setLite(liteBlue);
    } else if (event.target.className === "lite-color2") {
      setLite(liteRed);
    } else {
      setLite(liteGrey);
    }
  };
  const changeColor = (event) => {
    if (event.target.className === "color1") {
      setSe(seBlue);
    } else if (event.target.className === "color2") {
      setSe(seBlack);
    } else if (event.target.className === "color3") {
      setSe(seRed);
    } else if (event.target.className === "color4") {
      setSe(seOlive);
    } else if (event.target.className === "color5") {
      setSe(seGold);
    } else {
      setSe(seGrey);
    }
  };
  const changeMaxColor = (event) => {
    if (event.target.className === "max-color1") {
      setMax(maxBlue);
    } else if (event.target.className === "max-color2") {
      setMax(maxRed);
    } else if (event.target.className === "max-color3") {
      setMax(maxBrown);
    } else {
      setMax(maxGrey);
    }
  };

  return (
    <>
      <div className="products-page">
        <section className="lite">
          <img src={design} alt="..." className="design1" />
          <div className="product-container">
            <div className="product-desc">
              <h1>SE 03 Lite</h1>
              <p>
                Introducing the SE 03 Lite – the future of urban commuting. This
                sleek electric scooty is powered by a robust 1.8 KWh LFP
                battery, designed to deliver up to 1500 cycles.The SE 03 Lite
                ensures minimal downtime and maximum convenience. The heart of
                this powerhouse is a 1500W motor, propelling you to a top speed
                of 55 km/h.The Rhyno EV SE 03 Lite – engineered for efficiency,
                built for durability, and crafted to redefine your ride.
              </p>
            </div>
            <div className="column">
              <div className="specs">
                <ul>
                  <h3>Specifications</h3>
                  <li>1.8Kwh Battery</li>
                  <li>LFP with 1500 cycles</li>
                  <li>Active Balancing</li>
                  <li>Waterproof (IP67)</li>
                  <li>3 years Battery warranty</li>
                  <li>3 hours Charging Time</li>
                  <li>1500W Motor</li>
                  <li>55 km/h Maximum Speed</li>
                  <li>1 year Electronics Warranty</li>
                </ul>
              </div>
              <div className="image-parent">
                <img src={liteBody} alt="..." className="body-image1" />
                <img src={lite} alt="..." className="part-image1" />
              </div>
            </div>
            <div className="column-buttons">
              <NavLink to="/payment-gateway" className="buy-now">
                Buy Now <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
              <div className="color-selector">
                <h2>
                  Available in : <span>(Choose to apply)</span>
                </h2>
                <div className="lite-color1" onClick={changeLiteColor}></div>
                <div className="lite-color2" onClick={changeLiteColor}></div>
                <div className="lite-color3" onClick={changeLiteColor}></div>
              </div>
            </div>
          </div>
        </section>
        <section className="se">
          <div className="product-container">
            <div className="product-desc">
              <h1>SE 03</h1>
              <p>
                Indulge in the perfect harmony of power and range with this
                Rhyno. Offering an exhilarating experience with its robust 2000W
                motor, it ensures a thrilling ride while still delivering an
                impressive 80-100km range on a single charge. Like its
                counterparts, this machine features the safety assurance of a
                fire-safe advanced LFP battery, along with the comprehensive
                benefits of owning a Rhyno. Boasting a formidable combination of
                a 2000W motor and a 2.7kWh battery, this beast is ready to roar
                on the roads, providing an electrifying journey at every turn.
                Check out the other details below!
              </p>
            </div>
            <div className="column">
              <div className="specs">
                <ul>
                  <h3>Specifications</h3>
                  <li>2.7Kwh Battery</li>
                  <li>LFP with 1500 cycles</li>
                  <li>Active Balancing</li>
                  <li>Waterproof (IP67)</li>
                  <li>3 years Battery warranty</li>
                  <li>4 hours Charging Time</li>
                  <li>1500W Motor</li>
                  <li>55 km/h Maximum Speed</li>
                  <li>1 year Electronics Warranty</li>
                </ul>
              </div>
              <div className="image-parent">
                <img src={seBody} alt="..." className="body-image1" />
                <img src={se} alt="..." className="part-image1" />
              </div>
            </div>
            <div className="column-buttons">
              <NavLink to="/payment-gateway" className="buy-now">
                Buy Now <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
              <div className="color-selector">
                <h2>
                  Available in : <span>(Choose to apply)</span>
                </h2>
                <div className="color1" onClick={changeColor}></div>
                <div className="color2" onClick={changeColor}></div>
                <div className="color3" onClick={changeColor}></div>
                <div className="color4" onClick={changeColor}></div>
                <div className="color5" onClick={changeColor}></div>
                <div className="color6" onClick={changeColor}></div>
              </div>
            </div>
          </div>
        </section>
        <section className="max">
          <div className="product-container">
            <div className="product-desc">
              <h1>SE 03 Max</h1>
              <p>
                This Rhyno is tuned for long drives and no thrills. Like all
                other variants, this machine comes with a fire-safe advanced LFP
                battery and all the other benefits of owning a Rhyno, along with
                a perfect blend of battery capacity and motor power to provide
                up to 150 km range on a single charge. While it may not provide
                a thrilling ride, it promises a dependable and unwavering
                presence on the long stretches.
              </p>
            </div>
            <div className="column">
              <div className="specs">
                <ul>
                  <h3>Specifications</h3>
                  <li>2.7Kwh Battery</li>
                  <li>LFP with 1500 cycles</li>
                  <li>Active Balancing</li>
                  <li>Waterproof (IP67)</li>
                  <li>3 years Battery warranty</li>
                  <li>4 hours Charging Time</li>
                  <li>2000W Motor</li>
                  <li>65 km/h Maximum Speed</li>
                  <li>1 year Electronics Warranty</li>
                </ul>
              </div>
              <div className="image-parent">
                <img src={maxBody} alt="..." className="body-image1" />
                <img src={max} alt="..." className="part-image1" />
              </div>
            </div>
            <div className="column-buttons">
              <NavLink to="/payment-gateway" className="buy-now">
                Buy Now <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
              <div className="color-selector">
                <h2>
                  Available in : <span>(Choose to apply)</span>
                </h2>
                <div className="max-color1" onClick={changeMaxColor}></div>
                <div className="max-color2" onClick={changeMaxColor}></div>
                <div className="max-color3" onClick={changeMaxColor}></div>
                <div className="max-color4" onClick={changeMaxColor}></div>
              </div>
            </div>
          </div>
        </section>
        <section className="compare">
          <h1>
            <span>Compare</span> Our Products!
          </h1>
          <div className="comparison-table">
            <div className="column-container1">
              <div className="column1">
                <h2>Specifications</h2>
                <div className="battery">
                  <h4>Battery</h4>
                </div>
                <div className="battery-features">
                  <h4>Battery Features</h4>
                </div>
                <div className="battery-warranty">
                  <h4>Battery Warranty</h4>
                </div>
                <div className="charging-time">
                  <h4>Charging Time</h4>
                </div>
                <div className="motor">
                  <h4>Motor</h4>
                </div>
                <div className="max-speed">
                  <h4>Maximum Speed</h4>
                </div>
                <div className="warranty-on-electronics">
                  <h4>Warranty on Electronics</h4>
                </div>
                <div className="max-30">
                  <h4>Maximum Range (@30 Kmph)</h4>
                </div>
                <div className="max-45">
                  <h4>Maximum Range (@45 Kmph)</h4>
                </div>
                <div className="max-full">
                  <h4>Maximum Range (@ Full Speed)</h4>
                </div>
              </div>
            </div>
            <div className="column-container2">
              <img src={image1} alt="..." />
              <div className="column2">
                <h2>SE 03 Lite</h2>
                <div className="battery">
                  <h4>1.8 Kwh</h4>
                </div>
                <div className="battery-features">
                  <h4>
                    LFP with 1500 cycles <br />
                    Active Balancing <br />
                    Waterproof (IP67)
                  </h4>
                </div>
                <div className="battery-warranty">
                  <h4>3 years</h4>
                </div>
                <div className="charging-time">
                  <h4>3 hours (12A)</h4>
                </div>
                <div className="motor">
                  <h4>1500W</h4>
                </div>
                <div className="max-speed">
                  <h4>55 Kmph</h4>
                </div>
                <div className="warranty-on-electronics">
                  <h4>1 year</h4>
                </div>
                <div className="max-30">
                  <h4>100 Km</h4>
                </div>
                <div className="max-45">
                  <h4>90 Km</h4>
                </div>
                <div className="max-full">
                  <h4>60 km</h4>
                </div>
              </div>
            </div>
            <div className="column-container3">
              <img src={image2} alt="..." />
              <div className="column3">
                <h2>SE 03</h2>
                <div className="battery">
                  <h4>2.7 Kwh</h4>
                </div>
                <div className="battery-features">
                  <h4>
                    LFP with 1500 cycles <br />
                    Active Balancing <br />
                    Waterproof (IP67)
                  </h4>
                </div>
                <div className="battery-warranty">
                  <h4>3 years</h4>
                </div>
                <div className="charging-time">
                  <h4>4 hours (12A)</h4>
                </div>
                <div className="motor">
                  <h4>1500W</h4>
                </div>
                <div className="max-speed">
                  <h4>55 Kmph</h4>
                </div>
                <div className="warranty-on-electronics">
                  <h4>1 year</h4>
                </div>
                <div className="max-30">
                  <h4>150 Km</h4>
                </div>
                <div className="max-45">
                  <h4>110 Km</h4>
                </div>
                <div className="max-full">
                  <h4>90 km</h4>
                </div>
              </div>
            </div>
            <div className="column-container4">
              <img src={image3} alt="..." />
              <div className="column4">
                <h2>SE 03 Max</h2>
                <div className="battery">
                  <h4>2.7 Kwh</h4>
                </div>
                <div className="battery-features">
                  <h4>
                    LFP with 1500 cycles <br />
                    Active Balancing <br />
                    Waterproof (IP67)
                  </h4>
                </div>
                <div className="battery-warranty">
                  <h4>3 years</h4>
                </div>
                <div className="charging-time">
                  <h4>4 hours (12A)</h4>
                </div>
                <div className="motor">
                  <h4>2000W</h4>
                </div>
                <div className="max-speed">
                  <h4>65 Kmph</h4>
                </div>
                <div className="warranty-on-electronics">
                  <h4>1 year</h4>
                </div>
                <div className="max-30">
                  <h4>120 Km</h4>
                </div>
                <div className="max-45">
                  <h4>100 Km</h4>
                </div>
                <div className="max-full">
                  <h4>80 km</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
