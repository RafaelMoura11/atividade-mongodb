import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';
import { FaArrowLeft } from 'react-icons/fa';

const BookFormPage = ({ onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    ano: '',
    genero: '',
    paginas: '',
    sinopse: '',
    isbn: ''
  });

  useEffect(() => {
    if (isEditing) {
      API.get(`/${id}`).then(res => setForm(res.data));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        ano: parseInt(form.ano),
        paginas: parseInt(form.paginas)
      };

      if (isEditing) {
        await API.put(`/${id}`, payload);
      } else {
        await API.post('/', payload);
      }

      onSave?.();
      navigate('/');
    } catch (error) {
      alert('Erro ao salvar: ' + error.response?.data?.error);
    }
  };

  return (
    <>
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate('/')}
      >
        <FaArrowLeft className="me-2" />
        Voltar
      </button>

      <form onSubmit={handleSubmit}>
        <h2>{isEditing ? 'Editar Livro' : 'Novo Livro'}</h2>
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
        <button type="submit" className="btn btn-primary mt-3">
          {isEditing ? 'Atualizar' : 'Salvar'}
        </button>
      </form>
    </>
  );
};

export default BookFormPage;
