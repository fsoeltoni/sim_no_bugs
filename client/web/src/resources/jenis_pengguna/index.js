import JenisPenggunaCreate from "./components/JenisPenggunaCreate";
import JenisPenggunaEdit from "./components/JenisPenggunaEdit";
import JenisPenggunaList from "./components/JenisPenggunaList";

const identities = {
  name: "jenis_pengguna",
  options: {
    label: "Jenis Pengguna"
  },
  create: JenisPenggunaCreate,
  edit: JenisPenggunaEdit,
  list: JenisPenggunaList
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
