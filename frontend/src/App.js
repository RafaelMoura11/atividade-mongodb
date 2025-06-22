import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [refresh, setRefresh] = useState(false);

  const reloadBooks = () => setRefresh(!refresh);

  return (
    <div className="container mt-4">
      <h1>Catálogo de Livros</h1>
      <BookForm onAdd={reloadBooks} />
      <BookList key={refresh} />
    </div>
  );
}

export default App;
