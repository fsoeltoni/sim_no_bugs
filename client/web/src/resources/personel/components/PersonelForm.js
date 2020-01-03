import React, { Fragment, useEffect } from "react";
import personel_src from "..";
import {
  useDataProvider,
  ReferenceInput,
  SelectInput,
  AutocompleteInput,
  NumberInput,
  TextInput,
  DateInput,
  FormDataConsumer
} from "react-admin";
import jenis_personel_src from "../../jenis_personel";
import gol_darah_src from "../../gol_darah";
import pangkat_src from "../../pangkat";
import korps_src from "../../korps";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-final-form";

const useStyles = makeStyles({
  jenis_personel: { display: "flex", width: 255 },
  no_identitas: { display: "flex", width: 255 },
  nama: { display: "flex", width: 255 },
  tempat_lahir: { display: "flex", width: 255 },
  tanggal_lahir: { display: "flex", width: 255 },
  gol_darah: { display: "flex", width: 255 },
  pangkat: { display: "flex", width: 255 },
  korps: { display: "flex", width: 255 },
  kesatuan: { display: "flex", width: 255 }
});

const PersonelForm = ({
  fields,
  jenis_personel_default,
  prefix,
  record,
  ...rest
}) => {
  const {
    id,
    jenis_personel,
    no_identitas,
    nama,
    tempat_lahir,
    tanggal_lahir,
    gol_darah,
    pangkat,
    korps,
    kesatuan
  } = personel_src.fields(prefix);

  const classes = useStyles();
  const form = useForm();
  const dataProvider = useDataProvider();
  const prefix_id = record[prefix + "_id"];

  useEffect(() => {
    if (jenis_personel_default) {
      form.change(jenis_personel.source, jenis_personel_default);
    }

    if (prefix_id)
      dataProvider
        .getOne(personel_src.identities.name, { id: prefix_id })
        .then(({ data: res }) =>
          form.batch(() => {
            jenis_personel_default
              ? form.change(jenis_personel.source, jenis_personel_default)
              : form.change(jenis_personel.source, res.jenis_personel_id);
            form.change(no_identitas.source, res.no_identitas);
            form.change(nama.source, res.nama);
            form.change(tempat_lahir.source, res.tempat_lahir);
            form.change(tanggal_lahir.source, res.tanggal_lahir);
            form.change(gol_darah.source, res.gol_darah_id);
            form.change(pangkat.source, res.pangkat_id);
            form.change(korps.source, res.korps_id);
            form.change(kesatuan.source, res.kesatuan);
          })
        );
  }, [
    prefix_id,
    jenis_personel_default,
    dataProvider,
    form,
    gol_darah.source,
    jenis_personel.source,
    kesatuan.source,
    korps.source,
    nama.source,
    no_identitas.source,
    pangkat.source,
    tanggal_lahir.source,
    tempat_lahir.source
  ]);

  const handleNoIdentitasChange = e => {
    const value = e.target.value;
    const jenis_personel_id = form.getFieldState(jenis_personel.source).value;

    if (value && jenis_personel_id) {
      dataProvider
        .getList(personel_src.identities.name, {
          pagination: { page: 1, perPage: 1 },
          sort: { field: id.source, order: "ASC" },
          filter: { jenis_personel_id: jenis_personel_id, no_identitas: value }
        })
        .then(({ data: res }) => {
          if (res[0]) {
            form.batch(() => {
              form.change(prefix + "_id", res[0].id);
              jenis_personel_default
                ? form.change(jenis_personel.source, jenis_personel_default)
                : form.change(jenis_personel.source, res[0].jenis_personel_id);
              form.change(no_identitas.source, res[0].no_identitas);
              form.change(nama.source, res[0].nama);
              form.change(tempat_lahir.source, res[0].tempat_lahir);
              form.change(tanggal_lahir.source, res[0].tanggal_lahir);
              form.change(gol_darah.source, res[0].gol_darah_id);
              form.change(pangkat.source, res[0].pangkat_id);
              form.change(korps.source, res[0].korps_id);
              form.change(kesatuan.source, res[0].kesatuan);
            });
          } else {
            form.batch(() => {
              form.change(nama.source, undefined);
              form.change(tempat_lahir.source, undefined);
              form.change(tanggal_lahir.source, undefined);
              form.change(gol_darah.source, undefined);
              form.change(pangkat.source, undefined);
              form.change(korps.source, undefined);
              form.change(kesatuan.source, undefined);
            });
          }
        });
    }
  };

  const handleJenisPersonelIdOnChange = () =>
    form.batch(() => {
      form.change(id.source, undefined);
      form.change(no_identitas.source, undefined);
      form.change(nama.source, undefined);
      form.change(tempat_lahir.source, undefined);
      form.change(tanggal_lahir.source, undefined);
      form.change(gol_darah.source, undefined);
      form.change(pangkat.source, undefined);
      form.change(korps.source, undefined);
      form.change(kesatuan.source, undefined);
    });

  const setNoIdentitasLabel = (formData, rest, classes) => {
    let label;

    if (formData[prefix] && formData[prefix].jenis_personel_id) {
      switch (formData[prefix].jenis_personel_id) {
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

      return (
        <NumberInput
          {...no_identitas}
          label={label}
          {...rest}
          className={classes.no_identitas}
          onChange={handleNoIdentitasChange}
        />
      );
    }
  };

  const isAnggotaTniAd = formData =>
    formData[prefix] &&
    formData[prefix].jenis_personel_id &&
    formData[prefix].jenis_personel_id === 1;

  return (
    <Fragment>
      <ReferenceInput
        {...jenis_personel}
        {...rest}
        onChange={handleJenisPersonelIdOnChange}
        className={classes.jenis_personel}
        disabled={jenis_personel_default ? true : false}
      >
        <SelectInput optionText={jenis_personel_src.fields.nama.source} />
      </ReferenceInput>
      <FormDataConsumer {...rest}>
        {({ formData, ...formDataRest }) =>
          setNoIdentitasLabel(formData, formDataRest, classes)
        }
      </FormDataConsumer>
      <TextInput {...nama} {...rest} className={classes.nama} />
      <TextInput {...tempat_lahir} {...rest} className={classes.tempat_lahir} />
      <DateInput
        {...tanggal_lahir}
        {...rest}
        className={classes.tanggal_lahir}
      />
      <ReferenceInput {...gol_darah} {...rest} className={classes.gol_darah}>
        <SelectInput optionText={gol_darah_src.fields.nama.source} />
      </ReferenceInput>
      <FormDataConsumer {...rest}>
        {({ formData, ...formDataRest }) =>
          isAnggotaTniAd(formData) && (
            <ReferenceInput
              {...pangkat}
              {...formDataRest}
              className={classes.pangkat}
            >
              <AutocompleteInput optionText={pangkat_src.fields.kode.source} />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer {...rest}>
        {({ formData, ...formDataRest }) =>
          isAnggotaTniAd(formData) && (
            <ReferenceInput
              {...korps}
              {...formDataRest}
              className={classes.korps}
            >
              <AutocompleteInput optionText={korps_src.fields.kode.source} />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer {...rest}>
        {({ formData, ...formDataRest }) =>
          isAnggotaTniAd(formData) && (
            <TextInput
              {...kesatuan}
              {...formDataRest}
              className={classes.kesatuan}
            />
          )
        }
      </FormDataConsumer>
    </Fragment>
  );
};

export default PersonelForm;
