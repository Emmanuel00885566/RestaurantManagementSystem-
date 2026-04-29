import express from "express";
import {
  getAllInventoryController,
  getInventoryByIdController,
  addInventoryItemController,
  updateInventoryItemController,
  deleteInventoryItemController,
  updateStockLevelController,
} from "../controllers/inventoryController.js";

const router = express.Router();

// Get all inventory items
router.get("/", getAllInventoryController);

// Get single item
router.get("/:id", getInventoryByIdController);

// Add new item
router.post("/", addInventoryItemController);

// Update item details
router.put("/:id", updateInventoryItemController);

// Delete item
router.delete("/:id", deleteInventoryItemController);

// Update stock level
router.put("/:id/stock", updateStockLevelController);

export default router;