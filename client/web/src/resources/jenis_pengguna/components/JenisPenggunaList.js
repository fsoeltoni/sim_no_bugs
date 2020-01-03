import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenis_pengguna from "..";

const JenisPenggunaList = props => {
  const {
    components: { list },
    fields: { id, nama }
  } = jenis_pengguna;

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

export default JenisPenggunaList;
