const Attachment = require('../models/Attachment');

exports.getAllAttachments = async (req, res) => {
    try {
        const attachments = await Attachment.find();
        res.json(attachments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createAttachment = async (req, res) => {
    try {
        const newAttachment = new Attachment(req.body);
        await newAttachment.save();
        res.status(201).json(newAttachment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
