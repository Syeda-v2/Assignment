const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
const isAuth = require('../middelware/auth_middelware');

router.get("/", isAuth, userController.getUserPage);
router.get("/edit/:id", isAuth, userController.getEditPage);
router.post("/edit/:id", isAuth, userController.updateUser);
router.get("/delete/:id", isAuth, userController.deleteUser);

module.exports = router;