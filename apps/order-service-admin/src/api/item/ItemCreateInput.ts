import { OrderCreateNestedManyWithoutItemsInput } from "./OrderCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutItemsInput;
  price?: number | null;
  quantity?: number | null;
  sku?: string | null;
};
