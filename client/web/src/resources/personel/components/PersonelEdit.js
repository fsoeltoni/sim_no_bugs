import React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  NumberInput,
  TextInput,
  DateInput,
  FormDataConsumer
} from "react-admin";
import personel from "..";
import now from "../../../helpers/now";
import jenis_personel_src from "../../jenis_personel";
import gol_darah_src from "../../gol_darah";
import pangkat_src from "../../pangkat";
import korps_src from "../../korps";

const PersonelEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields
  } = personel;

  const {
    jenis_personel,
    no_identitas,
    nama,
    tempat_lahir,
    tanggal_lahir,
    gol_darah,
    pangkat,
    korps,
    kesatuan
  } = fields();

  const initialValues = {
    updated: now
  };

  const setNoIdentitasLabel = (formData, rest) => {
    let label;

    if (formData.jenis_personel_id) {
      switch (formData.jenis_personel_id) {
        case 1:
          label = "NRP";
          break;
        case 2:
          label = "NIP";
          break;
        case 3:
          label = "NIK";
          break;
        default:
          label = null;
      }

      return <NumberInput {...no_identitas} label={label} {...rest} />;
    }
  };

  const isAnggotaTniAd = formData =>
    formData.jenis_personel_id && formData.jenis_personel_id === 1;

  return permissions ? (
    <Edit {...rest} {...edit}>
      <SimpleForm initialValues={initialValues} variant="outlined">
        <ReferenceInput {...jenis_personel}>
          <SelectInput optionText={jenis_personel_src.fields.nama.source} />
        </ReferenceInput>
        <FormDataConsumer>
          {({ formData, ...rest }) => setNoIdentitasLabel(formData, rest)}
        </FormDataConsumer>
        <TextInput {...nama} />
        <TextInput {...tempat_lahir} />
        <DateInput {...tanggal_lahir} />
        <ReferenceInput {...gol_darah}>
          <SelectInput optionText={gol_darah_src.fields.nama.source} />
        </ReferenceInput>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            isAnggotaTniAd(formData) && (
              <ReferenceInput {...pangkat} {...rest}>
                <AutocompleteInput
                  optionText={pangkat_src.fields.kode.source}
                />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            isAnggotaTniAd(formData) && (
              <ReferenceInput {...korps} {...rest}>
                <AutocompleteInput optionText={korps_src.fields.kode.source} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            isAnggotaTniAd(formData) && <TextInput {...kesatuan} {...rest} />
          }
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  ) : null;
};

export default PersonelEdit;
