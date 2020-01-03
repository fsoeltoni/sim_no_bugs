import React, { useCallback } from "react";
import { useForm } from "react-final-form";
import { SaveButton, useDataProvider, useRedirect } from "react-admin";
import personel_src from "../../../personel";
import pengguna from "../..";

const PenggunaUpdateButton = ({ handleSubmitWithRedirect, ...props }) => {
  const form = useForm();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const handleClick = useCallback(() => {
    const { personel, personel_id, id, ...rest } = form.getState().values;

    if (personel_id) {
      dataProvider
        .update(personel_src.identities.name, {
          id: personel_id,
          data: { ...personel }
        })
        .then(({ data: res }) => {
          dataProvider
            .update(pengguna.identities.name, {
              id: id,
              data: { ...rest, personel_id: res.id }
            })
            .then(res => {
              redirect("/pengguna");
            });
        })
        .catch(error => console.error(error));
    } else {
      dataProvider
        .create(personel_src.identities.name, {
          data: { ...personel }
        })
        .then(({ data: res }) => {
          dataProvider
            .update(pengguna.identities.name, {
              id: id,
              data: { ...rest, personel_id: res.id }
            })
            .then(res => {
              redirect("/pengguna");
            })
            .catch(error => console.error(error));
        });
    }
  }, [dataProvider, form, redirect]);

  return <SaveButton {...props} handleSubmitWithRedirect={handleClick} />;
};

export default PenggunaUpdateButton;
