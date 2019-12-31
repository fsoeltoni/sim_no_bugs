import React from "react";
import { Create, SimpleForm } from "react-admin";
import sim from "..";
import now from "../../../helpers/now";
import moment from "moment";

const SimCreate = props => {
  const {
    components: { create }
  } = sim;

  const initialValues = {
    berlaku_hingga: moment(now).add(5, "y"),
    created: now,
    updated: now
  };

  return (
    <Create {...props} {...create}>
      <SimpleForm initialValues={initialValues}></SimpleForm>
    </Create>
  );
};

export default SimCreate;
