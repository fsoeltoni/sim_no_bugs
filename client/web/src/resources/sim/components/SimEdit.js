import React from "react";
import { Edit, SimpleForm, ReferenceInput, SelectInput } from "react-admin";
import sim from "..";
import now from "../../../helpers/now";
import moment from "moment";
import penyelenggara_res from "../../penyelenggara";
import jenis_pengajuan_sim_res from "../../jenis_pengajuan_sim";
import gol_sim_res from "../../gol_sim";
import PersonelForm from "../../personel/components/PersonelForm";
import SimUpdateToolbar from "../helpers/edit/SimUpdateToolbar";

const SimEdit = ({ permissions, ...rest }) => {
  const {
    components: { edit },
    fields: { jenis_pengajuan_sim, gol_sim },
    prefix
  } = sim;

  let initialValues = null;

  if (permissions) {
    const { penyelenggara: penyelenggara_perm } = permissions;

    initialValues = {
      berlaku_hingga: moment(now).add(5, "y"),
      updated: now,
      penyelenggara_id: penyelenggara_perm[penyelenggara_res.fields.id.source]
    };
  }

  return permissions ? (
    <Edit {...rest} {...edit}>
      <SimpleForm
        initialValues={initialValues}
        variant="outlined"
        toolbar={<SimUpdateToolbar />}
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
    </Edit>
  ) : null;
};

export default SimEdit;
