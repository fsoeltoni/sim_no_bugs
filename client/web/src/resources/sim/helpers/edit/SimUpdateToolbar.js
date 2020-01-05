import React from "react";
import { Toolbar } from "react-admin";
import SimUpdateButton from "./SimUpdateButton";

const SimUpdateToolbar = props => {
  return (
    <Toolbar {...props}>
      <SimUpdateButton />
    </Toolbar>
  );
};

export default SimUpdateToolbar;
