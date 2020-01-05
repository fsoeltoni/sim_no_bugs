import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  FormDataConsumer
} from "react-admin";
import pengguna from "..";
import now from "../../../helpers/now";
import lingkup_src from "../../lingkup";
import penyelenggara_src from "../../penyelenggara";
import jenis_pengguna_src from "../../jenis_pengguna";
import PersonelForm from "../../personel/components/PersonelForm";
import PenggunaCreateToolbar from "../helpers/create/PenggunaCreateToolbar";

const PenggunaCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { lingkup, penyelenggara, jenis_pengguna, kata_sandi },
    prefix
  } = pengguna;

  const initialValues = {
    created: now,
    updated: now
  };

  const hasLingkup = formData => formData[lingkup.source];

  return permissions ? (
    <Create {...rest} {...create}>
      <SimpleForm
        initialValues={initialValues}
        variant="outlined"
        toolbar={<PenggunaCreateToolbar />}
      >
        <ReferenceInput {...lingkup}>
          <SelectInput optionText={lingkup_src.fields.nama.source} />
        </ReferenceInput>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            hasLingkup(formData) && (
              <ReferenceInput
                {...penyelenggara}
                {...rest}
                filter={{ lingkup_id: formData[lingkup.source] }}
              >
                <SelectInput
                  optionText={penyelenggara_src.fields.kode.source}
                />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <ReferenceInput {...jenis_pengguna}>
          <SelectInput optionText={jenis_pengguna_src.fields.nama.source} />
        </ReferenceInput>
        <PersonelForm prefix={prefix} />
        <TextInput {...kata_sandi} />
      </SimpleForm>
    </Create>
  ) : null;
};

export default PenggunaCreate;
