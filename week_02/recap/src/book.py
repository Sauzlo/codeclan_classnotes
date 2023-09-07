class Book:
    def __init__(self, title, author, genre):
        self.title = title
        self.author = author
        self.genre = genre

    def formatted_name(self):
        return f"{self.title} by {self.author}"
