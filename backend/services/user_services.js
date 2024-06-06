require('dotenv').config(); // Add this to the top of your file
const mongoose = require('mongoose');
const User = require("../model/user_model");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserServices {
    async createUser(email, password) {
        try {
            const hashedPassword = await bcryptjs.hash(password, 8); // Hash password
            const user = new User({ email, password: hashedPassword });
            await user.save();
            return { status: true, message: "User created successfully" };
        } catch (error) {
            console.error("Error in createUser:", error);
            throw error;
        }
    }

    async loginUser(email, password) {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('User not found');
            }
            const isMatch = await bcryptjs.compare(password, user.password);
            if (!isMatch) {
                throw new Error('Incorrect password');
            }
            // Use environment variable for the JWT secret
            const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '2 hours' });
            return { token, user: user.toObject() };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserServices();


