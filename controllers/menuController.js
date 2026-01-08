// controllers/menuController.js
import MenuItem from '../models/MenuItem.js';

// GET /api/menu
export const getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// GET /api/menu/:id
export const getMenuItemById = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Menu item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// POST /api/menu
export const addMenuItem = async (req, res) => {
  try {
    const { name, category, price, availability, description } = req.body;
    const newItem = new MenuItem({ name, category, price, availability, description });
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: 'Menu item not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const removed = await MenuItem.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Menu item not found' });
    res.json({ message: 'Menu item removed' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error: error.message });
  }
};