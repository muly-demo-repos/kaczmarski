import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  phoneNumber?: StringNullableFilter;
};
