import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
