// middleware/authenticate.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Assuming your JWT stores the user ID as '_id'
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};
function isAdmin(req, res, next) {
    // This function assumes the admin status is somehow verified (e.g., via a JWT token that includes user role)
    if (req.user.role !== "admin") {
        return res.status(403).json({ status: false, message: "Unauthorized access" });
    }
    next();
}

module.exports = authenticate;
