import SimCreate from "./components/SimCreate";
import SimEdit from "./components/SimEdit";
import jenis_pengajuan_sim from "../jenis_pengajuan_sim";
import gol_sim from "../gol_sim";
import personel from "../personel";
import penyelenggara from "../penyelenggara";
import SimList from "./components/SimList";

const identities = {
  name: "sim",
  options: {
    label: "SIM"
  },
  create: SimCreate,
  edit: SimEdit,
  list: SimList
};

const prefix = "personel";

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  no_sim: {
    source: "no_sim",
    label: "No SIM"
  },
  penyelenggara: {
    source: penyelenggara.identities.name + "_id",
    label: penyelenggara.identities.options.label,
    reference: penyelenggara.identities.name,
    sort: {
      field: penyelenggara.fields.id.source,
      order: "ASC"
    }
  },
  jenis_pengajuan_sim: {
    source: jenis_pengajuan_sim.identities.name + "_id",
    label: jenis_pengajuan_sim.identities.options.label,
    reference: jenis_pengajuan_sim.identities.name,
    sort: {
      field: jenis_pengajuan_sim.fields.id.source,
      order: "ASC"
    }
  },
  gol_sim: {
    source: gol_sim.identities.name + "_id",
    label: gol_sim.identities.options.label,
    reference: gol_sim.identities.name,
    sort: {
      field: gol_sim.fields.id.source,
      order: "ASC"
    }
  },
  personel_fields: { ...personel.fields(prefix) },
  personel: {
    source: prefix + "_id",
    label: personel.identities.options.label,
    reference: personel.identities.name
  },
  berlaku_hingga: {
    source: "berlaku_hingga",
    label: "Berlaku Hingga"
  },
  created: {
    source: "created",
    label: "Created"
  },
  updated: {
    source: "updated",
    label: "Updated"
  }
};

const components = {
  create: {
    title: "Tambah " + identities.options.label
  },
  edit: {
    title: "Ubah " + identities.options.label
  },
  list: {
    title: "Daftar " + identities.options.label
  }
};

const helpers = {
  fetchSingle: async (dataProvider, id) => {
    return await dataProvider.getOne(identities.name, {
      id: id
    });
  }
};

export default { identities, components, fields, prefix, helpers };
