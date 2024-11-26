const express = require('express');
const { getRoles, createRole, updateRole, deleteRole } = require('../controllers/roleController.js');

const router = express.Router();

router.get('/', getRoles);
router.post('/', createRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

module.exports = router;