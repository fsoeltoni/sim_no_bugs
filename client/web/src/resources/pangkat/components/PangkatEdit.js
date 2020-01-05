import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import pangkat from "..";
import now from "../../../helpers/now";

const PangkatEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama, kode }
  } = pangkat;

  const initialValues = {
    updated: now
  };

  return permissions ? (
    <Edit {...rest} {...edit}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Edit>
  ) : null;
};

export default PangkatEdit;
