import { React, useEffect } from "react";
import design from "./../About/design.png";
import design2 from "./../About/design2.png";
import "./RefundPolicy.css";

export const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund Policy | Rhyno EV";
  }, []);
  return (
    <section className="refund-policy">
      <img src={design} alt="..." className="design1" />
      <div className="privacy-text">
        <p>
          At Rhyno EV, we strive to ensure our customers are satisfied with
          their purchases. If for any reason you are not completely satisfied,
          we offer a comprehensive refund policy to address your concerns. This
          policy outlines the terms and conditions for refunds on products
          purchased through our website.
        </p>
        <br />
        <ul>
          <h2>Eligibility for Refunds</h2>
          <li>
            Proof of purchase (order number, receipt, or invoice) must be
            provided.
          </li>
          <li>
            The item must be returned within 30 days of the delivery date.
          </li>
        </ul>
        <ul>
          <h2>Non-Refundable Items</h2>
          <li>Items on sale or purchased with a discount code</li>
          <li>Customized or personalized products</li>
        </ul>
        <ul>
          <h2>Process for Requesting a Refund</h2>
          <li>
            Contact our customer support team at info@rhyno.in or +91-9023987528
            to request a Return Merchandise Authorization (RMA) number.
          </li>
          <li>
            Clearly write the RMA number on the outside of your return package.
          </li>
          <li>
            Ship the item to the address provided by our customer support team.
            Customers are responsible for return shipping costs unless the
            return is due to a mistake on our part (e.g., wrong item shipped,
            defective product).
          </li>
        </ul>
        <ul>
          <h2>Refund Approval and Processing</h2>
          <li>
            If approved, your refund will be processed, and a credit will
            automatically be applied to your original method of payment within
            7-10 business days.
          </li>
          <li>
            If rejected, we will provide a detailed explanation and discuss
            alternative solutions.
          </li>
        </ul>
        <ul>
          <h2>Exchanges</h2>
          <li>
            We only replace items if they are defective or damaged. If you need
            to exchange an item for the same product, contact our customer
            support team at info@rhyno.in or +91-9023987528 for assistance.
          </li>
        </ul>
        <ul>
          <h2>Late or Missing Refunds</h2>
          <li>Check your bank account again.</li>
          <li>
            Contact your credit card company; it may take some time before your
            refund is officially posted.
          </li>
          <li>
            Contact your bank. There is often some processing time before a
            refund is posted.
          </li>
          <li>
            If you’ve done all of this and still have not received your refund,
            please contact us at info@rhyno.in.
          </li>
        </ul>
        <p>
          Thank you for shopping with Rhyno EV. We value your business and are
          committed to providing you with the best possible service.
        </p>
      </div>
      <img src={design2} alt="..." className="design2" />
    </section>
  );
};
