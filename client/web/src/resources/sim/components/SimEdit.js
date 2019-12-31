import React from "react";
import { Edit, SimpleForm } from "react-admin";
import sim from "..";
import now from "../../../helpers/now";
const SimEdit = props => {
  const {
    components: { create }
  } = sim;

  const initialValues = {
    updated: now
  };

  return (
    <Edit {...props} {...create}>
      <SimpleForm initialValues={initialValues}></SimpleForm>
    </Edit>
  );
};

export default SimEdit;
