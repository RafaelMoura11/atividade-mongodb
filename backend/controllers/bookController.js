const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ titulo: 1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ autor: req.params.autor });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByGenre = async (req, res) => {
  try {
    const books = await Book.find({ genero: req.params.genero });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByYear = async (req, res) => {
  try {
    const books = await Book.find({ ano: parseInt(req.params.ano) });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTopPages = async (req, res) => {
  try {
    const books = await Book.find().sort({ paginas: -1 }).limit(10);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeastPages = async (req, res) => {
  try {
    const books = await Book.find().sort({ paginas: 1 }).limit(10);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByISBN = async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};