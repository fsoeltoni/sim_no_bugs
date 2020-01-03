import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import gol_darah from "..";

const GolDarahList = props => {
  const {
    components: { list },
    fields: { id, nama }
  } = gol_darah;

  return (
    <List {...props} {...list}>
      <Datagrid>
        <TextField {...id} />
        <TextField {...nama} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default GolDarahList;
