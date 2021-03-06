import React from "react";
import {
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import lingkup from "..";

const LingkupList = ({ permissions, ...rest }) => {
  const {
    components: { list },
    fields: { id, pendahulu, nama, label_komandan }
  } = lingkup;

  return permissions ? (
    <List {...rest} {...list}>
      <Datagrid>
        <TextField {...id} />
        <ReferenceField {...pendahulu}>
          <TextField source={nama.source} />
        </ReferenceField>
        <TextField {...nama} />
        <TextField {...label_komandan} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  ) : null;
};

export default LingkupList;
