import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import sim from "./resources/sim";

const title = attrs.title;
const dataProvider = data;

const App = () => (
  <Admin title={title} dataProvider={dataProvider}>
    <Resource {...sim.identities} />
  </Admin>
);

export default App;
