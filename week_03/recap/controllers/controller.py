from app import app
from flask import render_template
from models.book_list import books


@app.route("/books")
def index():
    return render_template("index.html", books=books)

@app.route("/books/<index>")
def show(index):
    print(f"the index is {index}")
    return render_template("show.html", book=books[int(index)])
