const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search); //tuyến đường thì phải từ trên xuống
router.get('/', siteController.index);

module.exports = router;
