import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import gol_darah from "..";
import now from "../../../helpers/now";

const GolDarahEdit = props => {
  const {
    components: { edit },
    fields: { nama }
  } = gol_darah;

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

export default GolDarahEdit;
