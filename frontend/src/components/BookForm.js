import React, { useState } from 'react';
import API from '../api';

const BookForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    ano: '',
    genero: '',
    paginas: '',
    sinopse: '',
    isbn: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/', {
        ...form,
        ano: parseInt(form.ano),
        paginas: parseInt(form.paginas)
      });
      onAdd(); // recarrega a lista de livros
      setForm({
        titulo: '',
        autor: '',
        ano: '',
        genero: '',
        paginas: '',
        sinopse: '',
        isbn: ''
      });
    } catch (error) {
      alert('Erro ao adicionar livro: ' + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h2>Adicionar Livro</h2>
      <div className="row">
        {['titulo', 'autor', 'ano', 'genero', 'paginas', 'isbn'].map((field) => (
          <div className="col-md-4" key={field}>
            <label className="form-label">{field.toUpperCase()}</label>
            <input
              type={field === 'ano' || field === 'paginas' ? 'number' : 'text'}
              name={field}
              className="form-control"
              value={form[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="col-12 mt-3">
          <label className="form-label">SINOPSE</label>
          <textarea
            name="sinopse"
            className="form-control"
            value={form.sinopse}
            onChange={handleChange}
            rows="3"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Salvar</button>
    </form>
  );
};

export default BookForm;
