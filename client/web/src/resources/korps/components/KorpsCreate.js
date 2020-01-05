import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import korps from "..";
import now from "../../../helpers/now";

const KorpsCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama, kode }
  } = korps;

  const initialValues = {
    created: now,
    updated: now
  };

  return permissions ? (
    <Create {...rest} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <TextInput {...nama} />
        <TextInput {...kode} />
      </SimpleForm>
    </Create>
  ) : null;
};

export default KorpsCreate;
