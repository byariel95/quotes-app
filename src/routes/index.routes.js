const  { Router } = require('express');
const indexController = require('../controllers/index.controller');
const router = Router();

router.get('/',indexController.index);
router.get('/about',indexController.about);


module.exports = router;