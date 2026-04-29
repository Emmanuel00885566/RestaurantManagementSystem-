import express from "express";
import {
  getAllMenuItems,
  getMenuItemById,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuController.js";

const router = express.Router();

// Get all menu items
router.get("/", getAllMenuItems);

// Get single menu item
router.get("/:id", getMenuItemById);

// Create new menu item
router.post("/", addMenuItem);

// Update menu item
router.put("/:id", updateMenuItem);

// Delete menu item
router.delete("/:id", deleteMenuItem);

export default router;