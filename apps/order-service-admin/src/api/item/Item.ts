import { Order } from "../order/Order";

export type Item = {
  createdAt: Date;
  description: string | null;
  id: string;
  orders?: Array<Order>;
  price: number | null;
  sku: string | null;
  updatedAt: Date;
};
