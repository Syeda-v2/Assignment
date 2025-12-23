const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

router.get("/", userController.getUserPage);
router.get("/create", userController.getCreatePage);
router.post("/create", userController.craeteUser);
router.get("/edit/:id", userController.getEditPage);
router.post("/edit/:id", userController.updateUser);
router.get("/delete/:id", userController.deleteUser);

module.exports = router;