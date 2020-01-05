import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from "react-admin";
import lingkup from "..";
import now from "../../../helpers/now";

const LingkupEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { pendahulu, nama, label_komandan }
  } = lingkup;

  const initialValues = {
    updated: now
  };

  return permissions ? (
    <Edit {...rest} {...edit}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <ReferenceInput {...pendahulu}>
          <SelectInput optionText={nama.source} />
        </ReferenceInput>
        <TextInput {...nama} />
        <TextInput {...label_komandan} />
      </SimpleForm>
    </Edit>
  ) : null;
};

export default LingkupEdit;
