import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import jenis_personel from "..";
import now from "../../../helpers/now";

const JenisPersonelCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama, kode }
  } = jenis_personel;

  const initialValues = {
    created: now,
    updated: now
  };

  return permissions ? (
    <Create {...rest} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Create>
  ) : null;
};

export default JenisPersonelCreate;
