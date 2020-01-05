import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import jenis_pomdam from "..";
import now from "../../../helpers/now";

const JenisPomdamEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama }
  } = jenis_pomdam;

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

export default JenisPomdamEdit;
