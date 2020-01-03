import PenyelenggaraCreate from "./components/PenyelenggaraCreate";
import lingkup from "../lingkup";
import jenis_pomdam from "../jenis_pomdam";
import personel from "../personel";
import PenyelenggaraList from "./components/PenyelenggaraList";
import PenyelenggaraEdit from "./components/PenyelenggaraEdit";

const identities = {
  name: "penyelenggara",
  options: {
    label: "Penyelenggara"
  },
  create: PenyelenggaraCreate,
  edit: PenyelenggaraEdit,
  list: PenyelenggaraList
};

const prefix = "komandan";

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
  jenis_pomdam: {
    source: jenis_pomdam.identities.name + "_id",
    label: jenis_pomdam.identities.options.label,
    reference: jenis_pomdam.identities.name,
    sort: {
      field: jenis_pomdam.fields.id.source,
      order: "ASC"
    }
  },
  nama: {
    source: "nama",
    label: "Nama"
  },
  kode: {
    source: "kode",
    label: "Kode"
  },
  kode_romawi: {
    source: "kode_romawi",
    label: "Kode Romawi"
  },
  logo: {
    source: "logo",
    label: "Logo",
    accept: "image/*"
  },
  stempel: {
    source: "stempel",
    label: "Stempel",
    accept: "image/*"
  },
  komandan_fields: { ...personel.fields(prefix) },
  komandan: {
    source: prefix + "_id",
    label: "Komandan",
    reference: personel.identities.name
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
