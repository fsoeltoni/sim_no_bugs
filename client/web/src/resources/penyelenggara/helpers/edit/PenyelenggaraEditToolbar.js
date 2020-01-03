import React from "react";
import { Toolbar } from "react-admin";
import PenyelenggaraEditButton from "./PenyelenggaraEditButton";

const PenyelenggaraEditToolbar = props => {
  return (
    <Toolbar {...props}>
      <PenyelenggaraEditButton />
    </Toolbar>
  );
};

export default PenyelenggaraEditToolbar;
