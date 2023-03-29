import React from "react";
import "./person.css";

export const Person = ({ name, description, imagen }) => {
  return (
    <div className="person">
      <div className="person-body">
        <a href="https://www.google.pl/">
          <img src={imagen} alt="forbes_logo" />
        </a>
        <div>
          <div className="section-btn">
            <a href="https://www.google.pl/">
              <p className="blue">{name}</p>
              <p className="grey">{description}</p>
            </a>
            <div className="buttton">
              <button>Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
