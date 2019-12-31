import SimCreate from "./components/SimCreate";
import SimEdit from "./components/SimEdit";

const identities = {
  name: "sim",
  options: {
    label: "SIM"
  },
  create: SimCreate,
  edit: SimEdit
};

const components = {
  create: {
    title: "Tambah " + identities.options.label
  },
  edit: {
    title: "Ubah " + identities.options.label
  }
};

export default { identities, components };
