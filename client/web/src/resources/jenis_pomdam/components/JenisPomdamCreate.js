import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import jenis_pomdam from "..";
import now from "../../../helpers/now";

const JenisPomdamCreate = props => {
  const {
    components: { create },
    fields: { nama }
  } = jenis_pomdam;

  const initialValues = {
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
      </SimpleForm>
    </Create>
  );
};

export default JenisPomdamCreate;
