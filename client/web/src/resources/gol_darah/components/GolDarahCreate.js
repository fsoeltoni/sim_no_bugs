import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import gol_darah from "..";
import now from "../../../helpers/now";

const GolDarahCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama }
  } = gol_darah;

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

export default GolDarahCreate;
