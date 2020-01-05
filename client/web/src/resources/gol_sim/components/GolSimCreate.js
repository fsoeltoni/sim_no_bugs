import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import gol_sim from "..";
import now from "../../../helpers/now";

const GolSimCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama }
  } = gol_sim;

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

export default GolSimCreate;
