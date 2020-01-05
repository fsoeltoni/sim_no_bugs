import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import personel from "..";

const PersonelList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields
  } = personel;

  const {
    id,
    jenis_personel,
    no_identitas,
    nama,
    tempat_lahir,
    tanggal_lahir,
    gol_darah,
    pangkat,
    korps,
    kesatuan
  } = fields();

  return permissions ? (
    <List {...rest} {...list}>
      <Datagrid>
        <TextField {...id} />
        <TextField {...nama} />
        <TextField {...no_identitas} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  ) : null;
};

export default PersonelList;
