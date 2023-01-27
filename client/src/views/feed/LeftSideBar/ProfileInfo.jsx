import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { getUserProfile } from "../../../redux/actions";
export const ProfileInfo = () => {
  const [user, setUser] = useState({});
  // const { user } = useSelector((state) => state.user);
  // console.log(user);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getUserProfile());
  }, []);

  return (
    <div id="profileInfoMain">
      <div id="profileInfoBackgroundImage">
        <img
          src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
          alt="background"
        />
      </div>
      <div id="profileInfoBody">
        <div id="profileInfoPersonalImage">
          <img alt="profile" src={user?.image} />
        </div>
        <h5>
          <a>
            {user?.name} {user?.surname}
          </a>
        </h5>
        <p>{user?.bio}</p>
      </div>
    </div>
  );
};
