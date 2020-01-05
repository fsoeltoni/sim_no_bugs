import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import gol_darah from "..";
import now from "../../../helpers/now";

const GolDarahEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama }
  } = gol_darah;

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

export default GolDarahEdit;
