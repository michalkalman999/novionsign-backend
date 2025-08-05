const express = require('express');
const router = express.Router();
const attachmentController = require('../controllers/attachmentController');

router.get('/', attachmentController.getAllAttachments);
router.post('/', attachmentController.createAttachment);

module.exports = router;
