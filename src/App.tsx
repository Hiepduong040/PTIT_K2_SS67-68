
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import Footer from './components/Footer';
import AddBookForm from './components/AddBookForm';
import ConfirmModal from './components/ConfirmModal';

export default function App() {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const addBook = (book: any) => {
    const newBooks = [...books, book];
    setBooks(newBooks);
    localStorage.setItem('books', JSON.stringify(newBooks));
    setShowForm(false);
  };

  return (
    <div className="w-[80%] m-auto mt-4 h-[100vh]">
      <main className="main">
        <Header onAdd={() => setShowForm(true)} />
        <SearchBar />
        <Table data={books} />
      </main>
      {showForm && <AddBookForm onSave={addBook} onClose={() => setShowForm(false)} />}
    </div>
  );
}

