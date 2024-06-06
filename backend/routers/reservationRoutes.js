const express = require('express');
const router = express.Router();
const Reservation = require('../model/reservation_model');
router.post('/reservations', async (req, res) => {
    try {
        const { userId, ...reservationDetails } = req.body;
        if (!userId) {
            return res.status(400).send({ error: "User ID is required" });
        }
        const reservation = new Reservation({
            ...reservationDetails,
            user: userId 
        });
        await reservation.save();
        res.status(201).send(reservation);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
router.get('/reservations', async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
        return res.status(400).send({ error: "User ID is required" });
        }
        const reservations = await Reservation.find({ user: userId });
        res.send(reservations);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
