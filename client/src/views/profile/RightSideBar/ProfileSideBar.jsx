import React from "react";
import { Options } from "./ProfileSideBar/Options";
import { JustAnAd } from "./ProfileSideBar/JustAnAd";
import { People } from "./ProfileSideBar/People";

export const ProfileSideBar = () => {
  return (
    <div>
      <Options />
      <JustAnAd />
      <People />
    </div>
  );
};
