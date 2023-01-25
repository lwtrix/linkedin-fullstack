import React from "react";
import "./professional-banners.css";
import { FiEdit2 } from "react-icons/fi";

export const ProffesionalBanners = () => {
  return (
    <div className="prof-banners">
      <div className="banner">
        <div className="edit-btn">
          <FiEdit2 className="edit-icon" />
        </div>
        <div className="text-container">
          <p className="title">Open to work</p>
          <p className="role">Software Engineer roles</p>
          <a className="details">See all details</a>
        </div>
      </div>
      <div className="banner">
        <div className="text-container">
          <p className="title">Open to work</p>
          <p className="role">Software Engineer roles</p>
          <a className="details">See all details</a>
        </div>
      </div>
      <div className="banner">
        <div className="text-container">
          <p className="title">Open to work</p>
          <p className="role">Software Engineer roles</p>
          <a className="details">See all details</a>
        </div>
      </div>
    </div>
  );
};
