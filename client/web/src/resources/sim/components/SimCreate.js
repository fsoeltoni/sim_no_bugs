import React from "react";
import { Create, SimpleForm } from "react-admin";
import sim from "..";
import now from "../../../helpers/now";
import moment from "moment";

const SimCreate = ({ permissions, ...rest }) => {
  const {
    components: { create }
  } = sim;

  const initialValues = {
    berlaku_hingga: moment(now).add(5, "y"),
    created: now,
    updated: now
  };

  return permissions ? (
    <Create {...rest} {...create}>
      <SimpleForm initialValues={initialValues}></SimpleForm>
    </Create>
  ) : null;
};

export default SimCreate;
