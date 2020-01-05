import PangkatCreate from "./components/PangkatCreate";
import PangkatEdit from "./components/PangkatEdit";
import PangkatList from "./components/PangkatList";

const identities = {
  name: "pangkat",
  options: {
    label: "Pangkat"
  },
  create: PangkatCreate,
  edit: PangkatEdit,
  list: PangkatList
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
