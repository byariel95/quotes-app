const  { Router } = require('express');
const QuotesController = require('../controllers/quotes.controller');
const router = Router();

router.get('/quotes',QuotesController.index);
router.get('/quotes/all',QuotesController.getQuotes);
router.post('/quotes',QuotesController.addQuote);


module.exports = router;