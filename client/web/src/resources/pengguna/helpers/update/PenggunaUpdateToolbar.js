import React from "react";
import { Toolbar } from "react-admin";
import PenggunaUpdateButton from "./PenggunaUpdateButton";

const PenggunaUpdateToolbar = props => {
  return (
    <Toolbar {...props}>
      <PenggunaUpdateButton />
    </Toolbar>
  );
};

export default PenggunaUpdateToolbar;
