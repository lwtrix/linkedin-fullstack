import React from "react";
import "./footer.css";

export const Footer = ({ props }) => {
  return (
    <div className="footer newsSideBar" id={props}>
      <div className="first-row">
        <a href="https://about.linkedin.com/">About</a>
        <a href="https://www.linkedin.com/accessibility">Accessibility</a>
        <a href="https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed">
          Help Center
        </a>
      </div>
      <div className="second-row">
        <a href="https://about.linkedin.com/">Privacy & Terms</a>
        <a href="https://www.linkedin.com/help/linkedin/answer/a1342443">
          Ad Choices
        </a>
      </div>
      <div className="third-row">
        <a href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart">
          Advertising
        </a>
        <a href="https://about.linkedin.com/">Business Services</a>
      </div>
      <div className="fourth-row">
        <a href="https://about.linkedin.com/">Get the LinkedIn app</a>
        <a href="https://about.linkedin.com/">More</a>
      </div>

      <div className="corporation">
        <div className="linkeIn">
          <div>
            <img
              src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png"
              alt="logo"
            />
          </div>
          <div>
            <p>LinkedIn Corporation © 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
