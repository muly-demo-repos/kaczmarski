import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
  updatedAt?: DateTimeFilter;
};
