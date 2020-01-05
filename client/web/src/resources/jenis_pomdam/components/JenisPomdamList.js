import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenis_pomdam from "..";

const JenisPomdamList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama }
  } = jenis_pomdam;

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

export default JenisPomdamList;
