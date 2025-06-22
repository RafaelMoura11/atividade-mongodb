const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/autor/:autor', bookController.getByAuthor);
router.get('/genero/:genero', bookController.getByGenre);
router.get('/ano/:ano', bookController.getByYear);
router.get('/mais-paginas', bookController.getTopPages);
router.get('/menos-paginas', bookController.getLeastPages);
router.get('/isbn/:isbn', bookController.getByISBN);


module.exports = router;