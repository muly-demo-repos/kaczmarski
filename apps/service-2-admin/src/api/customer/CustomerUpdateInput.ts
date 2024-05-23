import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type CustomerUpdateInput = {
  address?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  phoneNumber?: string | null;
};
