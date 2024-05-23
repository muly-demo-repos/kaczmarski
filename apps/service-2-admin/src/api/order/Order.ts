import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  orderDate: Date | null;
  status: string | null;
  totalAmount: number | null;
  updatedAt: Date;
};
