import React from "react";
import { Row, Col } from "react-bootstrap";
export const Links = () => {
  return (
    <div id="links">
      <div className="mt-2">
        <a href="">Groups</a>
      </div>
      <div className="mt-2" id="flex-row-links">
        <div>
          <a href="">Event</a>
        </div>
        <div id="big-plus">+</div>
      </div>
      <div className="mt-2 mb-2">
        <a href="">Hashtag follow</a>
      </div>
    </div>
  );
};
