import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { FaTrash, FaEdit } from 'react-icons/fa';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [filterType, setFilterType] = useState('autor');
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const res = await API.get('/');
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!filter) return fetchBooks();

    try {
      const res = await API.get(`/${filterType}/${filter}`);
      setBooks(Array.isArray(res.data) ? res.data : [res.data]);
    } catch {
      setBooks([]);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Deseja realmente excluir este livro?')) return;
    try {
      await API.delete(`/${id}`);
      fetchBooks();
    } catch (err) {
      alert('Erro ao deletar livro');
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <form className="row g-3 mb-4" onSubmit={handleSearch}>
        <div className="col-md-3">
          <select className="form-select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="autor">Autor</option>
            <option value="genero">Gênero</option>
            <option value="ano">Ano</option>
            <option value="isbn">ISBN</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Digite o termo de busca"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary w-100" type="submit">Buscar</button>
        </div>
      </form>

      <div className="bg-light p-3 rounded shadow-sm">
        <h2 className="mb-3">Lista de Livros</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>Gênero</th>
              <th>Páginas</th>
              <th>ISBN</th>
              <th>Ações</th>
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
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => navigate(`/editar/${book._id}`)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(book._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {books.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted">Nenhum livro encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
