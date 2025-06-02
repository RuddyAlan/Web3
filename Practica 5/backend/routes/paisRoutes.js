const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController');
const { validatePais } = require('../middleware/validation');

router.get('/', paisController.getAllPaises);
router.get('/:id', paisController.getPaisById);
router.post('/', validatePais, paisController.createPais);
router.put('/:id', validatePais, paisController.updatePais);
router.delete('/:id', paisController.deletePais);

module.exports = router;