const mongoose = require('mongoose');
const db = require("../config/db");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: "en attente" },
    role: { type: String, default: "partner" } 
});
const User = mongoose.model('User', userSchema);
module.exports = User;
//reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }];
const reservationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
