const router = require('express').Router();
const userController = require('../controller/user_controller');

router.post('/api',userController.createUser);

router.post('/login', userController.loginUser);



module.exports = router;





