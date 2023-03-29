import React from "react";
import { Row, Col } from "react-bootstrap";
export const Extras = () => {
  return (
    <div>
      <div className="leftSideBar-borderTop">
        <div className="extrasStyle">
          <div>
            <div>Access to tools and informations exclusive</div>
            <div className="flex-row">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
              </div>
              <div>
                <a href="">try Premium for free</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="leftSideBar-borderTop">
        <div className="extrasStyle flex-row">
          <div xs={2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
            </svg>
          </div>
          <div id="myElements">My elements</div>
        </div>
      </div>
    </div>
  );
};
