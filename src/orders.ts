import { Order } from "./interfaces";

const orders: Order[] = [];

export const addToOrders = (order: Order) => {
  orders.push(order);
  return order;
};

export const getOrders = () => {
  return orders;
};
