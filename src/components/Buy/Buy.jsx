import { React, useEffect } from "react";
import "./Buy.css";
import rupay from "./Buy images/RuPay.png";
import mastercard from "./Buy images/mastercard.png";
import visa from "./Buy images/visa.png";

export const Buy = () => {
  useEffect(() => {
    document.title = "Payment Gateway | Rhyno EV";
  }, []);

  const handleSubmit = (e) => {
    const amount = document.querySelector("#amount-value");
    const name = document.querySelector("#name-value");
    var options = {
      key: "rzp_test_yXCDYMxV4N6FtV",
      key_secret: "ZoHd1vekccrA9XGN3gXyAZMv",
      amount: amount.value * 100,
      currency: "INR",
      name: name.value,
      description: "test",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId);
      },
      theme: {
        color: "#000000",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <>
      <section className="payment-gateway">
        <div className="details-container">
          <div className="info-container">
            <h3>Please Enter Your Details</h3>
            <label className="label">
              Name : <span>*</span>
            </label>
            <br />
            <br />
            <input type="text" id="name-value" />
            <br />
            <br />
            <label className="label">
              Amount : <span>*</span>
            </label>
            <br />
            <br />
            <input type="number" id="amount-value" />
            <br />
            <label className="label">
              Email : <span>*</span>
            </label>
            <br />
            <br />
            <input type="email" />
            <br />
            <br />
            <label className="label">
              Phone : <span>*</span>
            </label>
            <br />
            <br />
            <input type="number" />
            <br />
            <label className="label">
              Current City : <span>*</span>
            </label>
            <br />
            <br />
            <input type="text" />
          </div>
          <div className="payment-container">
            <h3>Add Your Card</h3>
            <div className="label-text">
              <i className="fa-solid fa-user"></i>
              <label className="label">Card Holder Name : </label>
              <br />
              <br />
              <input type="text" />
            </div>
            <div className="label-text">
              <i className="fa-solid fa-credit-card"></i>
              <label className="label">Card Number : </label>
              <br />
              <br />
              <input type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
            </div>
            <div className="card-details">
              <div className="expiry">
                <i className="fa-solid fa-calendar-days"></i>
                <label className="label">Card Valid Thru : </label>
                <br />
                <br />
                <input type="text" placeholder="00/00" />
              </div>
              <div className="cvv">
                <i className="fa-solid fa-lock"></i>
                <label className="label">CVV : </label>
                <br />
                <br />
                <input type="number" placeholder="XXX" />
              </div>
            </div>
            <div className="pay-button">
              <button>Add Card</button>
              <div className="card-providers">
                <img src={visa} alt="..." />
                <img src={mastercard} alt="..." />
                <img src={rupay} alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="razorpay-button">
          <button onClick={handleSubmit}>Pay with RazorPay</button>
        </div>
      </section>
    </>
  );
};
