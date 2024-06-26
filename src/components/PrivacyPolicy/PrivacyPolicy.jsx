import { React, useEffect } from "react";
import design from "./../About/design.png";
import design2 from "./../About/design2.png";
import "./PrivacyPolicy.css";

export const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Rhyno EV";
  }, []);
  return (
    <>
      <section className="privacy-policy">
        <img src={design} alt="..." className="design1" />
        <div className="privacy-text">
          <p>
            Welcome to Rhyno EV. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your data when you visit our
            website.
          </p>
          <br />
          <ul>
            <h2>Information We Collect</h2>
            <li>
              Personal Information: Name, email address, phone number, mailing
              address, and other contact details.
            </li>
            <li>
              Technical Data: IP address, browser type, operating system,
              referral source, pages visited, and the dates/times of visits.
            </li>
            <li>
              Cookies and Tracking Technologies: We use cookies and similar
              technologies to enhance your experience on our Site.
            </li>
          </ul>
          <ul>
            <h2>How We Use Your Information</h2>
            <li>
              To Provide Services: To process orders, deliver products, and
              provide customer support.
            </li>
            <li>
              Marketing: To send promotional materials and updates if you have
              opted to receive them.
            </li>
            <li>
              Legal Compliance: To comply with applicable laws and regulations.
            </li>
          </ul>
          <ul>
            <h2>Sharing Your Information</h2>
            <li>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties
            </li>
          </ul>
          <ul>
            <h2>Data Security</h2>
            <li>
              We implement a variety of security measures to ensure the safety
              of your personal information. However, no method of transmission
              over the Internet or electronic storage is completely secure.
            </li>
          </ul>
          <ul>
            <h2>Changes to This Privacy Policy</h2>
            <li>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page with an updated effective date.
            </li>
          </ul>
          <ul>
            <h2>Consent</h2>
            <li>By using our Site, you consent to our Privacy Policy.</li>
          </ul>
          <ul>
            <h2>Governing Law</h2>
            <li>
              This Privacy Policy shall be governed and construed in accordance
              with the laws of the Government of India, without regard to its
              conflict of law provisions.
            </li>
          </ul>
          <p>
            Thank you for visiting Rhyno EV. Your privacy is important to us,
            and we are committed to protecting it.
          </p>
        </div>
        <img src={design2} alt="..." className="design2" />
      </section>
    </>
  );
};
