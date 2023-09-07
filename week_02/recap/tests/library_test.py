import unittest
from src.library import Library
from src.book import Book

class TestLibrary(unittest.TestCase):
    def test_library_can_find_a_book_by_title(self):
        # Arrange - setup
        book_1 = Book("Clean Code", "Robert Martin", "non-fiction")
        book_2 = Book("Head First Python", "Paul Barry", "non-fiction")
        library = Library("CodeClan Library")
        library.add_book(book_1)
        library.add_book(book_2)
        # Act - do the thing you want to test
        actual = library.find_book_by_title("Clean Code")
        # Assert - check it worked
        self.assertEqual(book_1, actual)