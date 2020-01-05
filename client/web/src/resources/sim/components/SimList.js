import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  FunctionField,
  EditButton,
  DeleteButton
} from "react-admin";
import sim from "..";
import penyelenggara_res from "../../penyelenggara";
import personel_res from "../../personel";
import jenis_pengajuan_sim_res from "../../jenis_pengajuan_sim";
import gol_sim_res from "../../gol_sim";

const SimList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: {
      id,
      no_sim,
      penyelenggara,
      personel,
      jenis_pengajuan_sim,
      gol_sim
    }
  } = sim;

  const renderPenyelenggara = record => {
    const kode = record[penyelenggara_res.fields.kode.source];
    const kode_romawi = record[penyelenggara_res.fields.kode_romawi.source]
      ? "/" + record[penyelenggara_res.fields.kode_romawi.source]
      : "";

    return kode + kode_romawi;
  };

  return permissions ? (
    <List {...rest} {...list}>
      <Datagrid>
        <TextField {...id} />
        <TextField {...no_sim} />
        <ReferenceField {...penyelenggara}>
          <FunctionField render={renderPenyelenggara} />
        </ReferenceField>
        <ReferenceField {...personel}>
          <TextField source={personel_res.fields().nama.source} />
        </ReferenceField>
        <ReferenceField {...jenis_pengajuan_sim}>
          <TextField source={jenis_pengajuan_sim_res.fields.nama.source} />
        </ReferenceField>
        <ReferenceField {...gol_sim}>
          <TextField source={gol_sim_res.fields.nama.source} />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  ) : null;
};

export default SimList;
