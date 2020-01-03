import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import pangkat from "..";

const PangkatList = props => {
  const {
    components: { list },
    fields: { id, nama, kode }
  } = pangkat;

  return (
    <List {...props} {...list}>
      <Datagrid>
        <TextField {...id} />
        <TextField {...nama} />
        <TextField {...kode} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default PangkatList;
