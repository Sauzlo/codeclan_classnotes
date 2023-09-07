let books = [
    { title: 'Clean Code', author: 'Robert Martin' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { title: 'Refactoring', author: 'Martin Fowler' },
];

console.log({ books });

document.addEventListener('DOMContentLoaded', () => {
    // target the book ul so we can add to it
    const bookList = document.querySelector('#book-list');

    books.forEach((book) => {
        // make an li element for each book
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} `;
        bookList.appendChild(li);

        // make a button for each li
        const button = document.createElement('button');
        button.textContent = '❌';
        li.appendChild(button);

        // add a function to remove the book to the button
        button.addEventListener('click', () => {
            books = books.filter(b => book !== b);
            console.log({ books });
            console.log('We need to update the UI...');
        });
    });
});
