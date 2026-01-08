import express from 'express';
import {
  getAllTables,
  getAvailableTables,
  createReservation,
  cancelReservation,
  getAllReservations
} from '../controllers/tableController.js';

const router = express.Router();

router.get('/', getAllTables);

router.get('/available', getAvailableTables);

router.get('/reservations', getAllReservations);

router.post('reserve', createReservation);

router.delete('/reservations/:id', cancelReservation);

export default router;