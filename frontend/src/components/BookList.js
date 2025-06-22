import React, { useEffect, useState } from 'react';
import API from '../api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get('/')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="mt-4">
      <h2>Lista de Livros</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
            <th>Gênero</th>
            <th>Páginas</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.titulo}</td>
              <td>{book.autor}</td>
              <td>{book.ano}</td>
              <td>{book.genero}</td>
              <td>{book.paginas}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
