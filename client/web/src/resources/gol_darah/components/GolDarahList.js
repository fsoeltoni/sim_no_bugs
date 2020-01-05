import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import gol_darah from "..";

const GolDarahList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama }
  } = gol_darah;

  return permissions ? (
    <List {...rest} {...list}>
      <Datagrid>
        <TextField {...id} />
        <TextField {...nama} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  ) : null;
};

export default GolDarahList;
