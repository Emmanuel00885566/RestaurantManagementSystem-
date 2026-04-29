import orders from "../data/orderData.js";

export const getAllOrders = () => {
  return orders;
};

export const getOrderById = (id) => {
  return orders.find((order) => order.id === id);
};

export const addOrder = (order) => {
  orders.push(order);
  return order;
};

export const updateOrderStatus = (id, status) => {
  const order = orders.find((order) => order.id === id);

  if (!order) return null;

  order.status = status;
  return order;
};

export const deleteOrder = (id) => {
  const index = orders.findIndex(
    (order) => order.id === Number(id)
  );

  if (index === -1) return null;

  const deleted = orders.splice(index, 1)[0];
  return deleted;
};