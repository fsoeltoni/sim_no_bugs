import GolDarahCreate from "./components/GolDarahCreate";
import GolDarahEdit from "./components/GolDarahEdit";
import GolDarahList from "./components/GolDarahList";

const identities = {
  name: "gol_darah",
  options: {
    label: "Golongan Darah"
  },
  create: GolDarahCreate,
  edit: GolDarahEdit,
  list: GolDarahList
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

const helpers = {
  fetchSingle: async (dataProvider, id) => {
    return await dataProvider.getOne(identities.name, {
      id: id
    });
  }
};

export default { identities, components, fields, helpers };
