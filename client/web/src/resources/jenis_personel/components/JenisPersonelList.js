import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenis_personel from "..";

const JenisPersonelList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama, kode }
  } = jenis_personel;

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

export default JenisPersonelList;
