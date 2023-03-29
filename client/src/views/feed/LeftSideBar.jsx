import React from "react";
import { DiscoverMore } from "./LeftSideBar/DiscoverMore";
import { ProfileBar } from "./LeftSideBar/ProfileBar";
import "./left-side-bar.css";
import { useEffect } from "react";
import { useState } from "react";

export const LeftSideBar = () => {
  const [classNotFix, setClassNotFix] = useState("discoverMoreStyle");
  const [classNotFixNewBar, setClassNotFixNewBar] =
    useState("discoverMoreStyle");

  useEffect(() => {
    // Attach the event listener to the window object
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 465) {
      setClassNotFix("position-fixed-sidebar");
    } else {
      setClassNotFix("discoverMoreStyle");
      setClassNotFixNewBar("");
    }
    // Check if the user has scrolled to the point where you want to change the class
  };

  return (
    <div id="leftSideBarStyle">
      <ProfileBar />

      <DiscoverMore props={classNotFix} />
    </div>
  );
};
