const express = require('express');
const router = express.Router();

// Models
const Payment = require('../../models/Payment');
const AppealState = require('../../models/AppealState');

// Middleware
const auth = require('../../middleware/auth');

router.post('/:id/payment', auth, async (req, res) => {
    try {
        const payment = Payment.build({
            status: 0,
            appealId: req.params.id,
        });

        await payment.save();

        await AppealState.update(
            {
                appellant: 0,
                receptionist: 1,
                registrar: 0,
                bench: 0,
            },
            {
                where: { appealId: req.params.id },
            }
        );

        res.json(payment);
    } catch (err) {
        console.log(err);
        res.status(500).send('SERVER ERROR');
    }
});

// @route GET api/appellant/appeals/:id/payment
// @desc  Get order_id
// @access Private
router.get('/:id/payment', auth, async (req, res) => {
    try {
        const payment = await Payment.findOne({
            where: { appealId: req.params.id },
        });
        res.json(payment);
    } catch (err) {
        console.log(err);
        res.status(500).send('SERVER ERROR');
    }
});

module.exports = router;
