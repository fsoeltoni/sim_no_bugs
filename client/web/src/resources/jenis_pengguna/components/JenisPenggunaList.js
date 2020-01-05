import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenis_pengguna from "..";

const JenisPenggunaList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama }
  } = jenis_pengguna;

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

export default JenisPenggunaList;
