const router = require('express').Router();
const { Message } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newMessage = await Message.create({
            name: req.session.username,
            description: req.body.message,
        });

        res.status(200).json(newMessage);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router; 