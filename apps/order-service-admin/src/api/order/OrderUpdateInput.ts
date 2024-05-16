import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemUpdateManyWithoutOrdersInput } from "./ItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  items?: ItemUpdateManyWithoutOrdersInput;
};
