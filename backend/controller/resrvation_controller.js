const reservationService = require('../services/reervation_service');
const jwt = require('jsonwebtoken');
const createReservation = async (req, res) => {
  try {
    const userId = decoded.id;
    const reservationData = {...req.body, userId: userId};
    const reservation = await reservationService.addReservation(reservationData);
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  createReservation,
};
/*
exports.getReservations = async (req, res,next) => {
  try {
    const {user} = req.body;
    let  getreservations = await reservationService.getReservations (user);
    res.status(200).json(getreservations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}*/
