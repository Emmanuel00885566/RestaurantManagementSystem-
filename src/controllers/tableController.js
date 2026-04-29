import { TableModel } from '../models/tableModel.js';

export const getAllTables = (req, res) => {
  const allTables = TableModel.getAllTables();
  res.json({
    message: 'All tables retrieved successfully',
    tables: allTables
  });
};

export const getAvailableTables = (req, res) => {
  const availableTables = TableModel.getAvailableTables();
  res.json({
    message: 'Available tables retrieved successfully',
    available: availableTables
  });
};

export const createReservation = (req, res) => {
  const { name, tableId, time } = req.body;

  if (!name || !tableId || !time) {
    return res.status(400).json({ error: 'Please provide name, tableId, and time' });
  }

  const result = TableModel.reserveTable(name, Number(tableId), time);

  if (result.error) {
    return res.status(400).json(result);
  }

  res.status(201).json(result);
};

export const cancelReservation = (req, res) => {
  const { id } = req.params;
  const result = TableModel.cancelReservation(Number(id));

  if (result.error) {
    return res.status(404).json(result);
  }

  res.json(result);
};

export const getAllReservations = (req, res) => {
  const allReservations = TableModel.getAllReservations();
  res.json({
    message: 'All reservations retrieved successfully',
    reservations: allReservations
  });
};