import React, { useState, useEffect } from "react";
import { Advertising } from "./NewsSideBar/Advertising/Advertising";
import { Follow } from "./NewsSideBar/Follow/Follow";
import { Footer } from "./NewsSideBar/Footer/Footer";

export const NewsSidebar = () => {
  const [classNotFixNewBar, setClassNotFixNewBar] = useState("");
  const [classNotFixNewBarFooter, setClassNotFixNewBarFooter] = useState("");

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
    if (scrollTop > 385) {
      setClassNotFixNewBar("position-fixed-newbar");
      setClassNotFixNewBarFooter("position-fixed-footer");
    } else {
      setClassNotFixNewBar("position-fixed-newbar-not");
      setClassNotFixNewBarFooter("position-fixed-footer-not");
    }
    // Check if the user has scrolled to the point where you want to change the class
  };

  return (
    <div className="newsSideBar">
      <Follow />
      <div className="sticky">
        <Advertising props={classNotFixNewBar} />
        <Footer props={classNotFixNewBarFooter} />
      </div>
    </div>
  );
};
