import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import jenis_personel from "..";
import now from "../../../helpers/now";

const JenisPersonelCreate = props => {
  const {
    components: { create },
    fields: { nama, kode }
  } = jenis_personel;

  const initialValues = {
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Create>
  );
};

export default JenisPersonelCreate;
