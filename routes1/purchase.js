const express = require('express');

const purchaseController = require('../controllers1/purchase');

const Authentication=require('../middleware/auth');

const router = express.Router();

router.get('/premiummembership', Authentication.authentication,purchaseController.purchasepremium);

router.post('/updatetransactionstatus',Authentication.authentication, purchaseController.updateTransactionStatus)

module.exports = router;