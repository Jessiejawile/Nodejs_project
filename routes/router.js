const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');

router.get('/', hp.nom);
router.get('/route-two', hp.routeTwo);
router.get('/route-three', hp.routeThree);
router.get('/route-four', hp.routeFour);
router.get('/route-five', hp.routeFive);
router.get('/route-six', hp.routeSix);

module.exports = router;
