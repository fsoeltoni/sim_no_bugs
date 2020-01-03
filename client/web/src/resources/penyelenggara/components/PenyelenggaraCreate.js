import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ImageInput,
  FormDataConsumer
} from "react-admin";
import penyelenggara from "..";
import now from "../../../helpers/now";
import ImageBase64Field from "../../../helpers/components/ImageBase64Field";
import lingkup_src from "../../lingkup";
import jenis_pomdam_src from "../../jenis_pomdam";
import PersonelForm from "../../personel/components/PersonelForm";
import PenyelenggaraCreateToolbar from "../helpers/create/PenyelenggaraCreateToolbar";

const PenyelenggaraCreate = props => {
  const {
    components: { create },
    fields: { lingkup, jenis_pomdam, nama, kode, kode_romawi, logo, stempel },
    prefix
  } = penyelenggara;

  const initialValues = {
    created: now,
    updated: now
  };

  const isPomdam = formData =>
    formData[lingkup.source] && formData[lingkup.source] === 2;

  const isPomdamIstimewa = formData =>
    isPomdam(formData) &&
    formData[jenis_pomdam.source] &&
    formData[jenis_pomdam.source] === 2;

  return (
    <Create {...props} {...create}>
      <SimpleForm
        initialValues={initialValues}
        variant="outlined"
        toolbar={<PenyelenggaraCreateToolbar />}
      >
        <ReferenceInput {...lingkup}>
          <SelectInput optionText={lingkup_src.fields.nama.source} />
        </ReferenceInput>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            isPomdam(formData) && (
              <ReferenceInput {...jenis_pomdam} {...rest}>
                <SelectInput optionText={jenis_pomdam_src.fields.nama.source} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <TextInput {...nama} />
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            isPomdamIstimewa(formData) && (
              <TextInput {...kode_romawi} {...rest} />
            )
          }
        </FormDataConsumer>
        <TextInput {...kode} />
        <ImageInput {...logo}>
          <ImageBase64Field source="src" title="logo" />
        </ImageInput>
        <ImageInput {...stempel}>
          <ImageBase64Field source="src" title="stempel" />
        </ImageInput>
        <PersonelForm prefix={prefix} jenis_personel_default={1} />
      </SimpleForm>
    </Create>
  );
};

export default PenyelenggaraCreate;
