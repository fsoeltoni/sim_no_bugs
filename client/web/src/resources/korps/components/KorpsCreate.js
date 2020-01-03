import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import korps from "..";
import now from "../../../helpers/now";

const KorpsCreate = props => {
  const {
    components: { create },
    fields: { nama, kode }
  } = korps;

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

export default KorpsCreate;
