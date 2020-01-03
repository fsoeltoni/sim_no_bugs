import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenis_pomdam from "..";

const JenisPomdamList = props => {
  const {
    components: { list },
    fields: { id, nama }
  } = jenis_pomdam;

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

export default JenisPomdamList;
