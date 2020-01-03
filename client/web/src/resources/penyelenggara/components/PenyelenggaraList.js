import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  FunctionField,
  EditButton,
  DeleteButton
} from "react-admin";
import penyelenggara from "..";
import lingkup_src from "../../lingkup";
import personel_src from "../../personel";

const PenyelenggaraList = props => {
  const {
    components: { list },
    fields: { id, lingkup, nama, kode, kode_romawi, komandan }
  } = penyelenggara;

  const displayKode = record => {
    const display_kode_romawi = record[kode_romawi.source]
      ? record.kode_romawi.source + "/"
      : "";
    const display_kode = record[kode.source] ? record[kode.source] : "";

    return display_kode_romawi + display_kode;
  };

  return (
    <List {...props} {...list}>
      <Datagrid>
        <TextField {...id} />
        <ReferenceField {...lingkup}>
          <TextField source={lingkup_src.fields.nama.source} />
        </ReferenceField>
        <TextField {...nama} />
        <FunctionField label="Kode" render={displayKode} />
        <ReferenceField {...komandan}>
          <TextField source={personel_src.fields().nama.source} />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default PenyelenggaraList;
