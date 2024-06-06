const UserServices = require("../services/user_services");
exports.createUser = async (req, res, next) => {
    console.log(req.body); 
    try {
    const { email, password } = req.body;
        const result = await UserServices.createUser(email, password);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: "Error creating user", error: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await UserServices.loginUser(email, password);
        res.json({ token, user });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
