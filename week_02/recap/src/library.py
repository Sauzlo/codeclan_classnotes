class Library:
    def __init__(self, name):
        self.name = name
        self.books = []

    def add_book(self, book):
        self.books.append(book)

    def remove_book(self, book):
        self.books.remove(book)

    def find_book_by_title(self, title):
        found_book = None

        for book in self.books:
            if book.title == title:
                found_book = book
                break

        return found_book
