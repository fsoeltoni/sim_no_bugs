import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import pengguna from "..";
import lingkup_src from "../../lingkup";
import penyelenggara_src from "../../penyelenggara";
import jenis_pengguna_src from "../../jenis_pengguna";
import personel_src from "../../personel";

const PenggunaList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, lingkup, penyelenggara, jenis_pengguna, personel }
  } = pengguna;

  return permissions ? (
    <List {...rest} {...list}>
      <Datagrid>
        <TextField {...id} />
        <ReferenceField {...lingkup}>
          <TextField source={lingkup_src.fields.nama.source} />
        </ReferenceField>
        <ReferenceField {...penyelenggara}>
          <TextField source={penyelenggara_src.fields.kode.source} />
        </ReferenceField>
        <ReferenceField {...jenis_pengguna}>
          <TextField source={jenis_pengguna_src.fields.nama.source} />
        </ReferenceField>
        <ReferenceField {...personel}>
          <TextField source={personel_src.fields().nama.source} />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  ) : null;
};

export default PenggunaList;
