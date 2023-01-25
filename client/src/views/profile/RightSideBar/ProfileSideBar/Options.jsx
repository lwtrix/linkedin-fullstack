import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import "./options.css";

export const Options = () => {
  return (
    <div className="options">
      <div className="edit">
        <a href="https://www.linkedin.com/in/armando-hernandez-a5a870238/">
          Edit public profile & URL
        </a>
        <BsFillQuestionCircleFill />
      </div>
      <div className="add">
        <a href="https://www.linkedin.com/in/armando-hernandez-a5a870238/">
          Add profile in another language
        </a>
        <BsFillQuestionCircleFill />
      </div>
    </div>
  );
};
