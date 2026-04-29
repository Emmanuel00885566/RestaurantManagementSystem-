import express from "express";
import {
  getAllTables,
  getAvailableTables,
  createReservation,
  cancelReservation,
  getAllReservations,
} from "../controllers/tableController.js";

const router = express.Router();

// Get all tables
router.get("/", getAllTables);

// Get available tables
router.get("/available", getAvailableTables);

// Get all reservations
router.get("/reservations", getAllReservations);

// Create reservation
router.post("/reserve", createReservation);

// Cancel reservation
router.delete("/reservations/:id", cancelReservation);

export default router;