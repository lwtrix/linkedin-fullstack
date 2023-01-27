import React from "react";
import { ProfileInfo } from "./ProfileInfo";
import { ConnectionAndInvs } from "./ConnectionAndInvs";
import { Extras } from "./Extras";
export const ProfileBar = () => {
  return (
    <div id="profileBarStyle">
      <div id="profileInfoStyle">
        <ProfileInfo />
      </div>
      <ConnectionAndInvs />
      <Extras />
    </div>
  );
};
