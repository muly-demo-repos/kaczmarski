import { CustomerCreateNestedManyWithoutOrdersInput } from "./CustomerCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customers?: CustomerCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  status?: string | null;
  totalAmount?: number | null;
};
