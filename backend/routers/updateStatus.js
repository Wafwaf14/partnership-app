// Route for updating user status along with optional email and password
router.patch('/updateStatus/:userId', async (req, res) => {
    try {
        const { status, email, password } = req.body;
        const { userId } = req.params;
        const user = await UserServices.updateUserStatus(userId, status, email, password);
        res.json({ status: true, message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
});
