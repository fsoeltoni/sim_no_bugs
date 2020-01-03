import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import sim from "./resources/sim";
import penyelenggara from "./resources/penyelenggara";
import lingkup from "./resources/lingkup";
import jenis_pomdam from "./resources/jenis_pomdam";
import jenis_personel from "./resources/jenis_personel";
import pangkat from "./resources/pangkat";
import korps from "./resources/korps";
import personel from "./resources/personel";
import gol_darah from "./resources/gol_darah";
import pengguna from "./resources/pengguna";
import auth from "./providers/auth";
import jenis_pengguna from "./resources/jenis_pengguna";

const title = attrs.title;
const dataProvider = data;
const authProvider = auth;

const App = () => (
  <Admin title={title} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource {...sim.identities} />
    <Resource {...pengguna.identities} />
    <Resource {...jenis_pengguna.identities} />
    <Resource {...penyelenggara.identities} />
    <Resource {...jenis_pomdam.identities} />
    <Resource {...lingkup.identities} />
    <Resource {...personel.identities} />
    <Resource {...gol_darah.identities} />
    <Resource {...jenis_personel.identities} />
    <Resource {...pangkat.identities} />
    <Resource {...korps.identities} />
  </Admin>
);

export default App;
