import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import pangkat from "..";

const PangkatList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama, kode }
  } = pangkat;

  return permissions ? (
    <List {...rest} {...list}>
      <Datagrid>
        <TextField {...id} />
        <TextField {...nama} />
        <TextField {...kode} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  ) : null;
};

export default PangkatList;
