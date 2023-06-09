const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');

const router = express.Router();

router.post('/createUser', authMiddleware.verifyToken, userMiddleware.validatorUser, userController.create);
router.post('/login', userMiddleware.validatorLogin, userController.login);
router.post('/firstLoginVerify', userMiddleware.validatorFirstLoginVerify, userController.firstLoginVerify);
router.post('/firstLogin/:id', userMiddleware.validatorFirstLogin, userMiddleware.verifyPassword,
    userController.firstLogin);
router.put('/changePassword', authMiddleware.verifyToken, userMiddleware.validatorVerifyPassword, userMiddleware.verifyPassword,
    userController.changePassword);

module.exports = router;