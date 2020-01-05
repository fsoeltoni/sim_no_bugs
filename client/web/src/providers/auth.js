import storage from "./storage";
import { translate } from "react-admin";
import data from "./data";
import pengguna_res from "../resources/pengguna";
import penyelenggara_res from "../resources/penyelenggara";
import personel_res from "../resources/personel";
import pangkat_res from "../resources/pangkat";
import korps_res from "../resources/korps";

const fetchPengguna = async (no_identitas, kata_sandi) => {
  const { data: res } = await data.getList(pengguna_res.identities.name, {
    pagination: { page: 1, perPage: 1 },
    sort: { field: pengguna_res.fields.id.source, order: "ASC" },
    filter: {
      no_identitas: no_identitas,
      kata_sandi: kata_sandi
    }
  });

  return res[0];
};

export default {
  login: async ({ username, password }) => {
    const pengguna_fetched = await fetchPengguna(username, password);

    if (pengguna_fetched) {
      const { data: personel_fetched } = await personel_res.helpers.fetchSingle(
        data,
        pengguna_fetched[pengguna_res.fields.personel.source]
      );

      const {
        data: penyelenggara_fetched
      } = await penyelenggara_res.helpers.fetchSingle(
        data,
        pengguna_fetched[pengguna_res.fields.penyelenggara.source]
      );

      if (penyelenggara_fetched) {
        const {
          data: komandan_fetched
        } = await personel_res.helpers.fetchSingle(
          data,
          penyelenggara_fetched[penyelenggara_res.fields.komandan.source]
        );

        if (komandan_fetched) {
          const {
            data: pangkat_fetched
          } = await pangkat_res.helpers.fetchSingle(
            data,
            komandan_fetched[personel_res.fields().pangkat.source]
          );
          const { data: korps_fetched } = await korps_res.helpers.fetchSingle(
            data,
            komandan_fetched[personel_res.fields().korps.source]
          );

          const loginData = {
            pengguna: {
              id: pengguna_fetched[pengguna_res.fields.id.source],
              jenis_pengguna_id:
                pengguna_fetched[pengguna_res.fields.jenis_pengguna.source]
            },
            personel: personel_fetched,
            penyelenggara: penyelenggara_fetched,
            komandan: {
              id: komandan_fetched[personel_res.fields().id.source],
              no_identitas:
                komandan_fetched[personel_res.fields().no_identitas.source],
              nama: komandan_fetched[personel_res.fields().nama.source],
              pangkat: pangkat_fetched[pangkat_res.fields.kode.source],
              korps: korps_fetched[korps_res.fields.kode.source]
            }
          };

          storage.set(loginData);
          return Promise.resolve();
        }
      }
    } else {
      return Promise.reject(translate("Login Gagal"));
    }
  },
  logout: () => {
    storage.clear();

    return Promise.resolve();
  },
  checkError: error => {
    const status = error.status;

    if (status === 401 || status === 403) {
      storage.clear();
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: () => (storage.get() ? Promise.resolve() : Promise.reject()),
  getPermissions: () => {
    const pengguna = storage.get();

    return pengguna ? Promise.resolve(pengguna) : Promise.reject();
  }
};
