import React from "react";
import { Button } from "react-bootstrap";
import { Links } from "./Links";
import { Buttons } from "./Buttons";
export const DiscoverMore = ({ props }) => {
  return (
    <div id={props}>
      <Links />
      <Buttons />
    </div>
  );
};
