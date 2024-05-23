import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  id: string;
  name: string | null;
  order?: Order | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
