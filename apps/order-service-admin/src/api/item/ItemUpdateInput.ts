import { OrderUpdateManyWithoutItemsInput } from "./OrderUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  description?: string | null;
  orders?: OrderUpdateManyWithoutItemsInput;
  price?: number | null;
  quantity?: number | null;
  sku?: string | null;
};
