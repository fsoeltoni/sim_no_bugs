import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import korps from "..";

const KorpsList = props => {
  const {
    components: { list },
    fields: { id, nama, kode }
  } = korps;

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

export default KorpsList;
