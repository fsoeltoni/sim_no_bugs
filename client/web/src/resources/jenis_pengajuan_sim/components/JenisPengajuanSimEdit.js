import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import jenis_pengajuan_sim from "..";
import now from "../../../helpers/now";

const JenisPengajuanSimEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama, kode }
  } = jenis_pengajuan_sim;

  const initialValues = {
    updated: now
  };

  return permissions ? (
    <Edit {...rest} {...edit}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <NumberInput {...kode} />
      </SimpleForm>
    </Edit>
  ) : null;
};

export default JenisPengajuanSimEdit;
