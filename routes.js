const express = require('express');
const router = express.Router();
const createNotification = require('./test');

router.post('/notification', async (req, res) => {
    try {
        const validateResult = await createNotification.validateRequest(req);
        if (validateResult.error && validateResult.error.length > 0) {
            res.status(200).json({code: 1000, message: validateResult.error});
        } else {
            const result = 'Success';
            res.status(200).send(result)
        }
    } catch (e) {
        console.error('routes./notification: POST', e);
        res.status(400).send("Bad Request " + e.message)
    }
});

module.exports = router;
