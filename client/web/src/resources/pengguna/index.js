import PenggunaCreate from "./components/PenggunaCreate";
import PenggunaList from "./components/PenggunaList";
import PenggunaEdit from "./components/PenggunaEdit";
import lingkup from "../lingkup";
import personel from "../personel";
import penyelenggara from "../penyelenggara";
import jenis_pengguna from "../jenis_pengguna";

const identities = {
  name: "pengguna",
  options: {
    label: "Pengguna"
  },
  create: PenggunaCreate,
  edit: PenggunaEdit,
  list: PenggunaList
};

const prefix = "personel";

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  lingkup: {
    source: lingkup.identities.name + "_id",
    label: lingkup.identities.options.label,
    reference: lingkup.identities.name,
    sort: {
      field: lingkup.fields.id.source,
      order: "ASC"
    }
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
  jenis_pengguna: {
    source: jenis_pengguna.identities.name + "_id",
    label: jenis_pengguna.identities.options.label,
    reference: jenis_pengguna.identities.name,
    sort: {
      field: jenis_pengguna.fields.id.source,
      order: "ASC"
    }
  },
  personel_fields: { ...personel.fields(prefix) },
  personel: {
    source: prefix + "_id",
    label: personel.identities.options.label,
    reference: personel.identities.name
  },
  kata_sandi: {
    source: "kata_sandi",
    label: "Kata Sandi"
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
  list: {
    title: "Daftar " + identities.options.label,
    sort: {
      field: fields.id.source,
      order: "ASC"
    }
  },
  edit: {
    title: "Ubah " + identities.options.label
  }
};

export default { identities, components, fields, prefix };
