import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  numero?: number | null;
  state?: string | null;
  zip?: number | null;
};
