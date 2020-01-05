import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import gol_sim from "..";
import now from "../../../helpers/now";

const GolSimEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama }
  } = gol_sim;

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

export default GolSimEdit;
