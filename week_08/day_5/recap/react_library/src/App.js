import React, { useState } from 'react';
import BookList from './components/BookList';
import Heading from './components/Heading';
import './App.css';

function App() {
  console.log('App component rendering');

  const [books, setBooks] = useState([
    { title: 'Clean Code', author: 'Robert Martin' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { title: 'Refactoring', author: 'Martin Fowler' },
  ]);

  function removeBook(bookToRemove) {
    const updatedBooks = books.filter(book => book !== bookToRemove);
    setBooks(updatedBooks);
  }

  return (
    <div id="grid-container">
        <header>
            <Heading text="CC Library" />
        </header>
        <main>
            <section>
                <Heading text="CCL - The CodeClan Library" />
                <h2>Books</h2>
                <BookList books={books} onRemoveButtonClick={removeBook} />
            </section>
        </main>
        <footer>CodeClan Library &copy; 2023</footer>
    </div>
  );
}

export default App;
