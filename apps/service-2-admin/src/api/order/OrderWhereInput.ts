import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
