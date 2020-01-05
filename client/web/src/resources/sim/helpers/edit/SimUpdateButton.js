import React, { useCallback } from "react";
import { useForm } from "react-final-form";
import { SaveButton, useDataProvider, useRedirect } from "react-admin";
import penyelenggara_res from "../../../penyelenggara";
import jenis_pengajuan_sim_res from "../../../jenis_pengajuan_sim";
import gol_sim_res from "../../../gol_sim";
import personel_res from "../../../personel";
import sim from "../..";
import moment from "moment";
import monthToRoman from "../monthToRoman";

const SimUpdateButton = ({ handleSubmitWithRedirect, ...props }) => {
  const form = useForm();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const handleClick = useCallback(async () => {
    const {
      personel,
      personel_id,
      penyelenggara_id,
      id,
      ...rest
    } = form.getState().values;

    const { data: penyelenggara } = await penyelenggara_res.helpers.fetchSingle(
      dataProvider,
      penyelenggara_id
    );

    const {
      data: jenis_pengajuan_sim
    } = await jenis_pengajuan_sim_res.helpers.fetchSingle(
      dataProvider,
      rest[sim.fields.jenis_pengajuan_sim.source]
    );

    const { data: gol_sim } = await gol_sim_res.helpers.fetchSingle(
      dataProvider,
      rest[sim.fields.gol_sim.source]
    );

    const generateNoSim = (
      penyelenggara,
      sim_record,
      personel,
      jenis_pengajuan_sim,
      gol_sim
    ) => {
      const penyelenggara_kode =
        penyelenggara[penyelenggara_res.fields.kode.source];
      const sim_no_urut = sim_record[sim.fields.id.source]
        .toString()
        .padStart(4, "0");
      const personel_bulan_tahun_lahir = moment(
        personel[personel_res.fields().tanggal_lahir.source]
      ).format("MMYY");
      const gol_sim_nama = gol_sim[gol_sim_res.fields.nama.source];
      const jenis_pengajuan_sim_kode =
        jenis_pengajuan_sim[jenis_pengajuan_sim_res.fields.kode.source];
      const sim_record_created =
        monthToRoman(
          moment(sim_record[sim.fields.created.source]).format("M")
        ) +
        "/" +
        moment(sim_record[sim.fields.created.source]).format("YYYY");

      return (
        penyelenggara_kode +
        "." +
        sim_no_urut +
        "." +
        personel_bulan_tahun_lahir +
        "/" +
        gol_sim_nama +
        "." +
        jenis_pengajuan_sim_kode +
        "/" +
        sim_record_created
      );
    };

    if (personel_id) {
      const { data: personel_updated } = await dataProvider.update(
        personel_res.identities.name,
        {
          id: personel_id,
          data: { ...personel }
        }
      );

      if (personel_updated) {
        const { data: sim_updated } = await dataProvider.update(
          sim.identities.name,
          {
            id: id,
            data: {
              ...rest,
              personel_id: personel_updated[personel_res.fields().id.source]
            }
          }
        );

        if (sim_updated) {
          dataProvider
            .update(sim.identities.name, {
              id: sim_updated[sim.fields.id.source],
              data: {
                ...sim_updated,
                penyelenggara_id,
                no_sim: generateNoSim(
                  penyelenggara,
                  sim_updated,
                  personel,
                  jenis_pengajuan_sim,
                  gol_sim
                )
              }
            })
            .then(() => redirect("/sim"));
        }
      }
    } else {
      const { data: personel_created } = await dataProvider.create(
        personel_res.identities.name,
        {
          data: { ...personel }
        }
      );

      if (personel_created) {
        const { data: sim_updated } = await dataProvider.update(
          sim.identities.name,
          {
            id: id,
            data: {
              ...rest,
              personel_id: personel_created[personel_res.fields().id.source]
            }
          }
        );

        if (sim_updated) {
          dataProvider
            .update(sim.identities.name, {
              id: sim_updated[sim.fields.id.source],
              data: {
                ...sim_updated,
                penyelenggara_id,
                no_sim: generateNoSim(
                  penyelenggara,
                  sim_updated,
                  personel,
                  jenis_pengajuan_sim,
                  gol_sim
                )
              }
            })
            .then(() => redirect("/sim"));
        }
      }
    }
  }, [dataProvider, form, redirect]);

  return <SaveButton {...props} handleSubmitWithRedirect={handleClick} />;
};

export default SimUpdateButton;
