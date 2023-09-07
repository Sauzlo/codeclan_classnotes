from unittest import TestCase
from src.book import Book

class TestBook(TestCase):
    def setUp(self):
        self.book = Book("Clean Code", "Robert Martin", "non-fiction")

    def test_book_has_a_title(self):
        self.assertEqual("Clean Code", self.book.title)

    def test_book_has_an_author(self):
        self.assertEqual("Robert Martin", self.book.author)

    def test_book_has_a_genre(self):
        self.assertEqual("non-fiction", self.book.genre)
    
    def test_book_can_display_formatted_name(self):
        expected = "Clean Code by Robert Martin"
        # expected = f"{self.book.title} by {self.book.author}"
        actual = self.book.formatted_name()
        self.assertEqual(expected, actual)
