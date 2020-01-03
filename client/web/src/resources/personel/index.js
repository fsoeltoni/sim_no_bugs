import jenis_personel from "../jenis_personel";
import pangkat from "../pangkat";
import korps from "../korps";
import gol_darah from "../gol_darah";
import PersonelList from "./components/PersonelList";
import PersonelEdit from "./components/PersonelEdit";

const identities = {
  name: "personel",
  options: {
    label: "Personel"
  },
  list: PersonelList,
  edit: PersonelEdit
};

const fields = prefix => {
  return {
    id: {
      source: (prefix ? prefix + "." : "") + "id",
      label: "Id"
    },
    jenis_personel: {
      source:
        (prefix ? prefix + "." : "") + jenis_personel.identities.name + "_id",
      label: jenis_personel.identities.options.label,
      reference: jenis_personel.identities.name,
      sort: {
        field: jenis_personel.fields.id.source,
        order: "ASC"
      }
    },
    no_identitas: {
      source: (prefix ? prefix + "." : "") + "no_identitas"
    },
    nama: {
      source: (prefix ? prefix + "." : "") + "nama",
      label: "Nama"
    },
    tempat_lahir: {
      source: (prefix ? prefix + "." : "") + "tempat_lahir",
      label: "Tempat Lahir"
    },
    tanggal_lahir: {
      source: (prefix ? prefix + "." : "") + "tanggal_lahir",
      label: "Tanggal Lahir"
    },
    gol_darah: {
      source: (prefix ? prefix + "." : "") + gol_darah.identities.name + "_id",
      label: gol_darah.identities.options.label,
      reference: gol_darah.identities.name,
      sort: {
        field: gol_darah.fields.id.source,
        order: "ASC"
      }
    },
    pangkat: {
      source: (prefix ? prefix + "." : "") + pangkat.identities.name + "_id",
      label: pangkat.identities.options.label,
      reference: pangkat.identities.name,
      sort: {
        field: pangkat.fields.id.source,
        order: "ASC"
      }
    },
    korps: {
      source: (prefix ? prefix + "." : "") + korps.identities.name + "_id",
      label: korps.identities.options.label,
      reference: korps.identities.name,
      sort: {
        field: korps.fields.id.source,
        order: "ASC"
      }
    },
    kesatuan: {
      source: (prefix ? prefix + "." : "") + "kesatuan",
      label: "Kesatuan"
    }
  };
};

const components = {
  list: {
    title: "Daftar " + identities.options.label,
    sort: {
      field: fields().id.source,
      order: "ASC"
    }
  },
  edit: {
    title: "Ubah " + identities.options.label
  }
};

export default { identities, fields, components };
