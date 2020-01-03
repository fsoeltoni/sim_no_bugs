import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenis_personel from "..";

const JenisPersonelList = props => {
  const {
    components: { list },
    fields: { id, nama, kode }
  } = jenis_personel;

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

export default JenisPersonelList;
