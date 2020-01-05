import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import jenis_pengguna from "..";
import now from "../../../helpers/now";

const JenisPenggunaEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama }
  } = jenis_pengguna;

  const initialValues = {
    updated: now
  };

  return permissions ? (
    <Edit {...rest} {...edit}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
      </SimpleForm>
    </Edit>
  ) : null;
};

export default JenisPenggunaEdit;
