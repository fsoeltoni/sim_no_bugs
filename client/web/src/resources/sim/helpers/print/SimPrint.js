import React, { useEffect, useState } from "react";
import { useDataProvider } from "react-admin";
import sim_res from "../..";
import personel_res from "../../../personel";
import pangkat_res from "../../../pangkat";
import korps_res from "../../../korps";
import gol_darah_res from "../../../gol_darah";
import penyelenggara_res from "../../../penyelenggara";
import ibukota_provinsi_res from "../../../ibukota_provinsi";

const SimPrint = ({
  match: {
    params: { id }
  }
}) => {
  const dataProvider = useDataProvider();
  const [sim, setSim] = useState();
  const [personel, setPersonel] = useState();
  const [pangkat, setPangkat] = useState();
  const [korps, setKorps] = useState();
  const [gol_darah, setGolDarah] = useState();
  const [penyelenggara, setPenyelenggara] = useState();
  const [markas, setMarkas] = useState();
  const [komandan, setKomandan] = useState();
  const [pangkat_komandan, setPangkatKomandan] = useState();
  const [korp_komandan, setKorpsKomandan] = useState();

  useEffect(() => {
    if (id) {
      sim_res.helpers
        .fetchSingle(dataProvider, id)
        .then(({ data: res }) => setSim(res));
    }
  }, [id]);

  useEffect(() => {
    if (sim) {
      personel_res.helpers
        .fetchSingle(dataProvider, sim[sim_res.fields.personel.source])
        .then(({ data: res }) => setPersonel(res));
    }
  }, [sim]);

  useEffect(() => {
    if (personel) {
      if (personel[personel_res.fields().jenis_personel.source] === 1) {
        pangkat_res.helpers
          .fetchSingle(
            dataProvider,
            personel[personel_res.fields().pangkat.source]
          )
          .then(({ data: res }) => setPangkat(res));

        korps_res.helpers
          .fetchSingle(
            dataProvider,
            personel[personel_res.fields().korps.source]
          )
          .then(({ data: res }) => setKorps(res));
      }

      gol_darah_res.helpers
        .fetchSingle(
          dataProvider,
          personel[personel_res.fields().gol_darah.source]
        )
        .then(({ data: res }) => setGolDarah(res));
    }
  }, [personel]);

  useEffect(() => {
    if (sim) {
      penyelenggara_res.helpers
        .fetchSingle(dataProvider, sim[sim_res.fields.penyelenggara.source])
        .then(({ data: res }) => setPenyelenggara(res));
    }
  }, [sim]);

  useEffect(() => {
    if (penyelenggara) {
      ibukota_provinsi_res.helpers
        .fetchSingle(
          dataProvider,
          penyelenggara[penyelenggara_res.fields.markas.source]
        )
        .then(({ data: res }) => setMarkas(res));

      personel_res.helpers
        .fetchSingle(
          dataProvider,
          penyelenggara[penyelenggara_res.fields.komandan.source]
        )
        .then(({ data: res }) => setKomandan(res));
    }
  }, [penyelenggara]);

  useEffect(() => {
    if (komandan) {
      pangkat_res.helpers
        .fetchSingle(
          dataProvider,
          komandan[personel_res.fields().pangkat.source]
        )
        .then(({ data: res }) => setPangkatKomandan(res));

      korps_res.helpers
        .fetchSingle(dataProvider, komandan[personel_res.fields().korps.source])
        .then(({ data: res }) => setKorpsKomandan(res));
    }
  }, [komandan]);

  const sim_no_sim_display = sim ? sim[sim_res.fields.no_sim.source] : null;
  const personel_nama_display = personel
    ? personel[personel_res.fields().nama.source]
    : null;
  const personel_tempat_lahir_display = personel
    ? personel[personel_res.fields().tempat_lahir.source]
    : null;
  const personel_tanggal_lahir_display = personel
    ? personel[personel_res.fields().tanggal_lahir.source]
    : null;
  const pangkat_display = pangkat
    ? pangkat[pangkat_res.fields.kode.source]
    : null;
  const korps_display = korps ? korps[korps_res.fields.kode.source] : null;
  const no_identitas_display = personel
    ? personel[personel_res.fields().no_identitas.source]
    : null;
  const gol_darah_display = gol_darah
    ? gol_darah[gol_darah_res.fields.nama.source]
    : null;

  const diberikan_di_display = markas
    ? markas[ibukota_provinsi_res.fields.nama.source]
    : null;
  const pada_tanggal_display = sim ? sim[sim_res.fields.created.source] : null;
  const berlaku_hingga_display = sim
    ? sim[sim_res.fields.berlaku_hingga.source]
    : null;

  return "print";
};

export default SimPrint;
