import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import jenis_pengguna from "..";
import now from "../../../helpers/now";

const JenisPenggunaEdit = props => {
  const {
    components: { edit },
    fields: { nama }
  } = jenis_pengguna;

  const initialValues = {
    updated: now
  };

  return (
    <Edit {...props} {...edit}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
      </SimpleForm>
    </Edit>
  );
};

export default JenisPenggunaEdit;
