import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import ibukota_provinsi from "..";
import now from "../../../helpers/now";

const IbukotaProvinsiEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama }
  } = ibukota_provinsi;

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

export default IbukotaProvinsiEdit;
