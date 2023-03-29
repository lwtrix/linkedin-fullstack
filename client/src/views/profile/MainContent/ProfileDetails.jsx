import React, { useEffect, useState } from "react";
import "./profile-details.css";
import { ExperienceSection } from "./ExperienceSection";
import { ProfileInformation } from "./ProfileDetails/ProfileInformation";
import { useParams } from "react-router-dom";

export const ProfileDetails = ({}) => {
  // const params = useParams();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await fetch(
      "http://localhost:3001/users/63ce6e52e2f071bfb332df12"
    );
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <div className="profile-details">
      {user?._id && (
        <>
          <ProfileInformation user={user} />
          <ExperienceSection user={user} />
        </>
      )}
    </div>
  );
};
