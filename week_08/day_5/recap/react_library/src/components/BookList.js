import React from 'react';

function BookList({ books, onRemoveButtonClick }) {
    console.log('BookList component rendering');

    const bookListItems = books.map((book, index) => {
        return (
          <li key={index}>
            <span>{`${book.title} by ${book.author}`}</span>
            <button onClick={() => onRemoveButtonClick(book)}>x</button>
          </li>
        );
      });

    return (
        <ul>
            {bookListItems}
        </ul>
    );
}

export default BookList;
