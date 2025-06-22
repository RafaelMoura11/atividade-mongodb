import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import BookList from './components/BookList';
import BookFormPage from './components/BookFormPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppWrapper() {
  const [refresh, setRefresh] = useState(false);
  const reloadBooks = () => setRefresh(!refresh);

  const location = useLocation();

  return (
    <div className="container mt-4">
      <nav className="d-flex justify-content-between align-items-center mb-4">
        <h1>Catálogo de Livros</h1>
        {location.pathname === '/' && (
          <Link to="/novo" className="btn btn-success">+ Adicionar Livro</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<BookList key={refresh} />} />
        <Route path="/novo" element={<BookFormPage onSave={reloadBooks} />} />
        <Route path="/editar/:id" element={<BookFormPage onSave={reloadBooks} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
