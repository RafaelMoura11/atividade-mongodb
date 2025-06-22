const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Consultas específicas
router.get('/autor/:autor', bookController.getByAuthor);
router.get('/genero/:genero', bookController.getByGenre);
router.get('/ano/:ano', bookController.getByYear);
router.get('/isbn/:isbn', bookController.getByISBN);
router.get('/mais-paginas', bookController.getTopPages);
router.get('/menos-paginas', bookController.getLeastPages);

// CRUD
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

// IMPORTANTE: essa deve ser a ÚLTIMA rota
router.get('/:id', bookController.getById);

module.exports = router;