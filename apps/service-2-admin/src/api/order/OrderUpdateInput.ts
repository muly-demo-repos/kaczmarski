import { CustomerUpdateManyWithoutOrdersInput } from "./CustomerUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customers?: CustomerUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  status?: string | null;
  totalAmount?: number | null;
};
