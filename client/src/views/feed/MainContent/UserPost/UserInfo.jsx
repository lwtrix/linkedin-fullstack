import React, { useEffect, useState } from "react";
import "./user-info.css";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const UserInfo = ({ user }) => {
  const navigate = useNavigate();

  const [userTitle, setUserTitle] = useState("");
  const randomTimeNum = Math.floor(Math.random() * 24) + 1;

  useEffect(() => {
    if (user) {
      setUserTitle(typeof user.title === "string" ? user.title.trim() : "");
    }
  }, [user]);

  return (
    <>
      {user ? (
        <div className="user-info">
          <div className="img-container">
            <img
              onClick={() => navigate(`/profile/${user._id}`)}
              src={
                user.image
                  ? user.image
                  : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt=""
            />
          </div>

          <div className="user-details">
            <span
              className="user-name"
              onClick={() => navigate(`/profile/${user._id}`)}
            >{`${user.name} ${user.surname}`}</span>
            <span className="user-title">{userTitle}</span>
            <span className="time-passed">
              <span>{randomTimeNum === 24 ? "1d" : `${randomTimeNum}h`}</span>
              <div className="dot" />
              <AiOutlineGlobal style={{ fontSize: "15px" }} />
            </span>
          </div>
          <a className="follow-btn">
            <AiOutlinePlus className="plus-icon" style={{ fontSize: "18px" }} />
            Follow
          </a>
        </div>
      ) : null}
    </>
  );
};
