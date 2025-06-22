const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
  genero: { type: String, required: true },
  paginas: { type: Number, required: true },
  sinopse: { type: String },
  isbn: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
