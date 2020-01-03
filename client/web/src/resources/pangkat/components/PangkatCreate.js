import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import pangkat from "..";
import now from "../../../helpers/now";

const PangkatCreate = props => {
  const {
    components: { create },
    fields: { nama, kode }
  } = pangkat;

  const initialValues = {
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Create>
  );
};

export default PangkatCreate;
