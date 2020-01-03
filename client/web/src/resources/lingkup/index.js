import LingkupCreate from "./components/LingkupCreate";
import LingkupEdit from "./components/LingkupEdit";
import LingkupList from "./components/LingkupList";

const identities = {
  name: "lingkup",
  options: {
    label: "Lingkup"
  },
  create: LingkupCreate,
  edit: LingkupEdit,
  list: LingkupList
};

const fields = {
  id: {
    source: "id",
    label: "Id"
  },
  pendahulu: {
    source: "pendahulu_id",
    label: "Pendahulu",
    reference: identities.name,
    sort: {
      field: "id",
      order: "ASC"
    }
  },
  nama: {
    source: "nama",
    label: "Nama"
  },
  label_komandan: {
    source: "label_komandan",
    label: "Label Komandan"
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
