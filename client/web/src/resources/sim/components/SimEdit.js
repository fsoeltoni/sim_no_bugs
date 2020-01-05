import React from "react";
import { Edit, SimpleForm } from "react-admin";
import sim from "..";
import now from "../../../helpers/now";

const SimEdit = ({ permissions, ...rest }) => {
  const {
    components: { create }
  } = sim;

  const initialValues = {
    updated: now
  };

  return permissions ? (
    <Edit {...rest} {...create}>
      <SimpleForm initialValues={initialValues}></SimpleForm>
    </Edit>
  ) : null;
};

export default SimEdit;
