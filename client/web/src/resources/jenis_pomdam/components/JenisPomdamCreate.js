import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import jenis_pomdam from "..";
import now from "../../../helpers/now";

const JenisPomdamCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama }
  } = jenis_pomdam;

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

export default JenisPomdamCreate;
