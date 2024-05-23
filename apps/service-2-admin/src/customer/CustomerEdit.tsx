import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <TextInput label="PhoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
