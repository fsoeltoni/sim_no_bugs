import React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";
import jenis_pengajuan_sim from "..";
import now from "../../../helpers/now";

const JenisPengajuanSimCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama, kode }
  } = jenis_pengajuan_sim;

  const initialValues = {
    created: now,
    updated: now
  };

  return permissions ? (
    <Create {...rest} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <NumberInput {...kode} />
      </SimpleForm>
    </Create>
  ) : null;
};

export default JenisPengajuanSimCreate;
