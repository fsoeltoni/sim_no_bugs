import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import jenis_pengajuan_sim from "..";

const JenisPengajuanSimList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama, kode }
  } = jenis_pengajuan_sim;

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

export default JenisPengajuanSimList;
