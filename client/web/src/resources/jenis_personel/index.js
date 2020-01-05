import JenisPersonelCreate from "./components/JenisPersonelCreate";
import JenisPersonelEdit from "./components/JenisPersonelEdit";
import JenisPersonelList from "./components/JenisPersonelList";

const identities = {
  name: "jenis_personel",
  options: {
    label: "Jenis Personel"
  },
  create: JenisPersonelCreate,
  edit: JenisPersonelEdit,
  list: JenisPersonelList
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
