import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import jenis_pengguna from "..";
import now from "../../../helpers/now";

const JenisPenggunaCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama }
  } = jenis_pengguna;

  const initialValues = {
    created: now,
    updated: now
  };

  return permissions ? (
    <Create {...rest} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
      </SimpleForm>
    </Create>
  ) : null;
};

export default JenisPenggunaCreate;
