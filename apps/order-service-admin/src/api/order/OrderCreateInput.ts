import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ItemCreateNestedManyWithoutOrdersInput } from "./ItemCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  items?: ItemCreateNestedManyWithoutOrdersInput;
};
