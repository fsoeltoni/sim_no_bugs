import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import pangkat from "..";
import now from "../../../helpers/now";

const PangkatEdit = props => {
  const {
    components: { edit },
    fields: { nama, kode }
  } = pangkat;

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

export default PangkatEdit;
