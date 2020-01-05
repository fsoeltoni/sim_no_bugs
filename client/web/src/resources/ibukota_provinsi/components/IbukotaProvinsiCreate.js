import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import ibukota_provinsi from "..";
import now from "../../../helpers/now";

const IbukotaProvinsiCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { nama }
  } = ibukota_provinsi;

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

export default IbukotaProvinsiCreate;
