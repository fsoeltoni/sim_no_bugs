import KorpsCreate from "./components/KorpsCreate";
import KorpsEdit from "./components/KorpsEdit";
import KorpsList from "./components/KorpsList";

const identities = {
  name: "korps",
  options: {
    label: "Korps"
  },
  create: KorpsCreate,
  edit: KorpsEdit,
  list: KorpsList
};

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  nama: {
    source: "nama",
    label: "Nama"
  },
  kode: {
    source: "kode",
    label: "Kode"
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
    title: "Daftar " + identities.options.label,
    sort: {
      field: fields.id.source,
      order: "ASC"
    }
  }
};

export default { identities, components, fields };
