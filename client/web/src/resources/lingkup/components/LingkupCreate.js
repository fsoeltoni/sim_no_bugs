import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from "react-admin";
import lingkup from "..";
import now from "../../../helpers/now";

const LingkupCreate = props => {
  const {
    components: { create },
    fields: { pendahulu, nama, label_komandan }
  } = lingkup;

  const initialValues = {
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <ReferenceInput {...pendahulu}>
          <SelectInput optionText={nama.source} />
        </ReferenceInput>
        <TextInput {...nama} />
        <TextInput {...label_komandan} />
      </SimpleForm>
    </Create>
  );
};

export default LingkupCreate;
