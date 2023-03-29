import React from "react";
import "./advertising.css";
import { BsThreeDots } from "react-icons/bs";

export const Advertising = ({ props }) => {
  return (
    <div className="advertising newsSideBar" id={props}>
      <div className="dot">
        <p>Reklama</p>
        <BsThreeDots className="doty" />
      </div>

      <div className="ad">
        <p className="text-ad">
          Armando Armando, bądź na bieżąco z wiadomościami i trendami w branży
        </p>
        <div className="image">
          <a href="https://www.linkedin.com/feed/">
            <img
              src="https://ocdn.eu/rankings-content-transforms/1/tq5k9ktY2FyQ2F0YWxvZ3VlLzI3YWY4MmQzYzQzYjMwNjZlZDU1YjU5ZmE5ODIxMTZhkpUDAADNAlzNAVOTBc0DB80Bot4AAqEwAaExAA"
              alt="ad_photo"
            />
          </a>
        </div>
        <p>
          Armando, otrzymuj najnowsze informacje z <br />{" "}
          <strong>Mercedes-Benz Trucks PL.</strong>
        </p>
        <div className="button">
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};
