import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import ibukota_provinsi from "..";

const IbukotaProvinsiList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, nama }
  } = ibukota_provinsi;

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

export default IbukotaProvinsiList;
