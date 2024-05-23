import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
