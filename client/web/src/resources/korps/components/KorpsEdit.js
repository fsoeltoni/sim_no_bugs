import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import korps from "..";
import now from "../../../helpers/now";

const KorpsEdit = props => {
  const {
    components: { edit },
    fields: { nama, kode }
  } = korps;

  const initialValues = {
    updated: now
  };

  return (
    <Edit {...props} {...edit}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Edit>
  );
};

export default KorpsEdit;
