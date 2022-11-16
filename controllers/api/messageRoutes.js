const router = require('express').Router();
const { Message } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates a message based on its id

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

// Deletes a message based on its id

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const messageData = await Message.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!messageData) {
            res.status(404).json({ message: 'No Message found with this id!' });
            return;
        }

        res.status(200).json(messageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router; 