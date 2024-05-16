import { OrderCreateNestedManyWithoutItemsInput } from "./OrderCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutItemsInput;
  price?: number | null;
  sku?: string | null;
};
