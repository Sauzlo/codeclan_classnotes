class Book:
    def __init__(self, title, author, description):
        self.title = title
        self.author = author
        self.description = description
    
    def formatted_name(self):
        return f"{self.title} by {self.author}"
