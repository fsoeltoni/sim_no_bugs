import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import jenis_personel from "..";
import now from "../../../helpers/now";

const JenisPersonelEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { nama, kode }
  } = jenis_personel;

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

export default JenisPersonelEdit;
