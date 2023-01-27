import React from "react";
import { Row, Col } from "react-bootstrap";
import "./youDropDown.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserProfile } from "../../redux/actions";
export const YouDropDown = () => {
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getUserProfile());
import "../css/navBar/youDropDown.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions";
export const YouDropDown = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <div>
      <div className="borderGray">
        <div id="youDropDown-profiledescription">
          <div className="first-div">
            <div id="youDropDownProfile">
              {/* {user && <img alt="profile" src={user.image} />} */}
            </div>
          </div>
          <div className="second-div">
            {/* <h5>
              {user && <img alt="profile" src={user.image} />}
            </div>
          </div>
          <div className="second-div">
            <h5>
              {user && (
                <a>
                  {user.name} {user.surname}
                </a>
              )}
            </h5>
            {user && <p>{user.bio}</p>} */}
          </div>
        </div>
        <Button id="youDropDown-button" onClick={(e) => navigate("/profile")}>
          Visualze Profile
        </Button>
      </div>
      <div className="borderGray underline">
        <h5>Account</h5>
        <div className="flex-row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              class="mercado-match"
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
        <div>Settings and Privacy</div>
        <div>Guide</div>
        <div>Language</div>
      </div>
      <div className="borderGray underline">
        <div>Handle</div>
        <div>Post and Activity</div>

        <div>Account</div>
      </div>
      <div className="borderGray underline" id="no-border">
        Exit
      </div>
    </div>
  );
};
