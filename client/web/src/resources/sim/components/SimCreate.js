import React from "react";
import { Create, SimpleForm, ReferenceInput, SelectInput } from "react-admin";
import sim from "..";
import now from "../../../helpers/now";
import moment from "moment";
import penyelenggara_res from "../../penyelenggara";
import jenis_pengajuan_sim_res from "../../jenis_pengajuan_sim";
import gol_sim_res from "../../gol_sim";
import PersonelForm from "../../personel/components/PersonelForm";
import SimCreateToolbar from "../helpers/create/SimCreateToolbar";
import SimPreview from "./SimPreview";

const SimCreate = ({ permissions, ...rest }) => {
  const {
    components: { create },
    fields: { jenis_pengajuan_sim, gol_sim },
    prefix
  } = sim;

  let initialValues = null;

  if (permissions) {
    const { penyelenggara: penyelenggara_perm } = permissions;

    initialValues = {
      berlaku_hingga: moment(now).add(5, "y"),
      created: now,
      updated: now,
      penyelenggara_id: penyelenggara_perm[penyelenggara_res.fields.id.source]
    };
  }

  return permissions ? (
    <Create
      aside={<SimPreview initialValues={initialValues} />}
      {...rest}
      {...create}
    >
      <SimpleForm
        initialValues={initialValues}
        variant="outlined"
        toolbar={<SimCreateToolbar />}
      >
        <ReferenceInput {...jenis_pengajuan_sim}>
          <SelectInput
            optionText={jenis_pengajuan_sim_res.fields.nama.source}
          />
        </ReferenceInput>
        <ReferenceInput {...gol_sim}>
          <SelectInput optionText={gol_sim_res.fields.nama.source} />
        </ReferenceInput>
        <PersonelForm prefix={prefix} />
      </SimpleForm>
    </Create>
  ) : null;
};

export default SimCreate;
