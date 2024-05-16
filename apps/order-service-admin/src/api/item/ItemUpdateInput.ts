import { OrderUpdateManyWithoutItemsInput } from "./OrderUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  description?: string | null;
  orders?: OrderUpdateManyWithoutItemsInput;
  price?: number | null;
  sku?: string | null;
};
