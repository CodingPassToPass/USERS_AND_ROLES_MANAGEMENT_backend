const express = require('express');
const { getUsers, createUser , updateUser , deleteUser  } = require('../controllers/userController.js');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser );
router.put('/:id', updateUser );
router.delete('/:id', deleteUser );

module.exports = router;

