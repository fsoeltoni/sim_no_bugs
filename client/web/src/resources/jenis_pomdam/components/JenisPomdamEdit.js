import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import jenis_pomdam from "..";
import now from "../../../helpers/now";

const JenisPomdamEdit = props => {
  const {
    components: { edit },
    fields: { nama }
  } = jenis_pomdam;

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

export default JenisPomdamEdit;
