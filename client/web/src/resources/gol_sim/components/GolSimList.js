import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import gol_sim from "..";

const GolSimList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama }
  } = gol_sim;

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

export default GolSimList;
