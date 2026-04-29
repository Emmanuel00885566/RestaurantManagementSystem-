import inventory from "../data/inventoryData.js";

export const getAllInventory = () => inventory;

export const getInventoryById = (id) =>
  inventory.find((item) => item.id === Number(id));

export const addInventoryItem = (newItem) => {
  const id = inventory.length
    ? inventory[inventory.length - 1].id + 1
    : 1;

  const item = { id, ...newItem };

  inventory.push(item);
  return item;
};

export const updateInventoryItem = (id, updatedData) => {
  const index = inventory.findIndex(
    (item) => item.id === Number(id)
  );

  if (index === -1) return null;

  inventory[index] = {
    ...inventory[index],
    ...updatedData,
  };

  return inventory[index];
};

export const deleteInventoryItem = (id) => {
  const index = inventory.findIndex(
    (item) => item.id === Number(id)
  );

  if (index === -1) return false;

  inventory.splice(index, 1);
  return true;
};

export const getInventoryItemByMenuId = (menuId) => {
  return inventory.find(
    (item) => item.menuId === Number(menuId)
  );
};

export const updateStockLevel = (menuId, quantityUsed) => {
  const item = inventory.find(
    (inv) => inv.menuId === Number(menuId)
  );

  if (!item) return null;

  item.quantity -= quantityUsed;

  if (item.quantity < 0) {
    item.quantity = 0;
  }

  if (
    item.lowStockThreshold !== undefined &&
    item.quantity <= item.lowStockThreshold
  ) {
    console.log(
      `Low stock alert: ${item.name} (${item.quantity} ${item.unit} left)`
    );
  }

  return item;
};

export const restoreStockLevel = (
  menuId,
  quantityToRestore
) => {
  const item = inventory.find(
    (inv) => inv.menuId === Number(menuId)
  );

  if (!item) return null;

  item.quantity += quantityToRestore;

  console.log(
    `Restored ${quantityToRestore} units of ${item.name}. New total: ${item.quantity} ${item.unit}`
  );

  return item;
};