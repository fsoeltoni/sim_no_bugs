import IbukotaProvinsiCreate from "./components/IbukotaProvinsiCreate";
import IbukotaProvinsiEdit from "./components/IbukotaProvinsiEdit";
import IbukotaProvinsiList from "./components/IbukotaProvinsiList";

const identities = {
  name: "ibukota_provinsi",
  options: {
    label: "Ibukota Provinsi"
  },
  create: IbukotaProvinsiCreate,
  edit: IbukotaProvinsiEdit,
  list: IbukotaProvinsiList
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
