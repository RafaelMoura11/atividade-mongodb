import React, { useState } from 'react';
import API from '../api';

const BookSearch = () => {
  const [filter, setFilter] = useState('');
  const [type, setType] = useState('autor');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!filter) return;

    try {
      const res = await API.get(`/${type}/${filter}`);
      setResults(Array.isArray(res.data) ? res.data : [res.data]);
    } catch (error) {
      alert('Nenhum resultado encontrado.');
      setResults([]);
    }
  };

  return (
    <div className="mt-5">
      <h2>Buscar Livros</h2>
      <form onSubmit={handleSearch} className="row g-3 align-items-end">
        <div className="col-md-3">
          <label className="form-label">Tipo de busca</label>
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="autor">Autor</option>
            <option value="genero">Gênero</option>
            <option value="ano">Ano</option>
            <option value="isbn">ISBN</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Filtro</label>
          <input
            type="text"
            className="form-control"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Digite parte ou valor completo"
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary w-100" type="submit">
            Buscar
          </button>
        </div>
      </form>

      {results.length > 0 && (
        <div className="mt-4">
          <h4>Resultado{results.length > 1 ? 's' : ''}:</h4>
          <ul className="list-group">
            {results.map(book => (
              <li key={book._id} className="list-group-item">
                <strong>{book.titulo}</strong> — {book.autor} ({book.ano}) | {book.genero} | {book.paginas} pág.
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
