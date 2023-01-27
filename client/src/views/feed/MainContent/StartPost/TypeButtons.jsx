import React from "react";
import "./type-buttons.css";
import { FiYoutube } from "react-icons/fi";
import { BiImage, BiCalendar, BiDetail } from "react-icons/bi";

export const TypeButtons = () => {
  return (
    <div className="type-buttons">
      <div className="btn-container">
        <BiImage className="btn-icon" style={{ color: "#378fe9" }} />
        <span>Photo</span>
      </div>
      <div className="btn-container">
        <FiYoutube className="btn-icon" style={{ color: "#5f9b41" }} />
        <span>Video</span>
      </div>
      <div className="btn-container">
        <BiCalendar className="btn-icon" style={{ color: "#c37d16" }} />
        <span>Event</span>
      </div>
      <div className="btn-container">
        <BiDetail className="btn-icon" style={{ color: "#e16745" }} />
        <span>Write Article</span>
      </div>
    </div>
  );
};
