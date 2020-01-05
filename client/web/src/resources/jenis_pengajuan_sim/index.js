import JenisPengajuanSimCreate from "./components/JenisPengajuanSimCreate";
import JenisPengajuanSimEdit from "./components/JenisPengajuanSimEdit";
import JenisPengajuanSimList from "./components/JenisPengajuanSimList";

const identities = {
  name: "jenis_pengajuan_sim",
  options: {
    label: "Jenis Pengajuan SIM"
  },
  create: JenisPengajuanSimCreate,
  edit: JenisPengajuanSimEdit,
  list: JenisPengajuanSimList
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

const helpers = {
  fetchSingle: async (dataProvider, id) => {
    return await dataProvider.getOne(identities.name, {
      id: id
    });
  }
};

export default { identities, components, fields, helpers };
