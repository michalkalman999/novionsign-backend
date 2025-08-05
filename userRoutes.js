const express = require('express');
const router = express.Routers();
const userController = require('../controllers/userController');

// GET všetkých užívateľov
router.get('/', userController.getAllUsers);
// POST vytvorenie užívateľa
router.post('/', userController.createUser);

module.exports = router;

