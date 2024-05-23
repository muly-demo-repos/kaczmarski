import { Customer } from "../customer/Customer";

export type Address = {
  address1: string | null;
  address2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  numero: number | null;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
