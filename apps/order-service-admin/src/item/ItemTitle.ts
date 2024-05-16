import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "sku";

export const ItemTitle = (record: TItem): string => {
  return record.sku?.toString() || String(record.id);
};
