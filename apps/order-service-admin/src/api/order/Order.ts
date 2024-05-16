import { Customer } from "../customer/Customer";
import { Item } from "../item/Item";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  items?: Array<Item>;
  updatedAt: Date;
};
