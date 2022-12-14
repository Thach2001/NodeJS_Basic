const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create); 
router.post('/store', courseController.store);
router.get('/:slug', courseController.show); //tuyến đường thì phải từ trên xuống

module.exports = router;
