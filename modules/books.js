/* eslint-disable import/prefer-default-export */
class BookCollection {
  constructor() {
    this.allBooks = JSON.parse(localStorage.getItem('allBooks')) || [];
    this.addButton = document.getElementById('add-btn');
    this.addButton.addEventListener('click', () => this.addBook());
  }

  addBook = () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const title = titleInput.value;
    const authorName = authorInput.value;
    if (title && authorName) {
      const bookList = { title, authorName };
      this.allBooks.push(bookList);
      this.saveCollection();
      this.clearInputFields();
      this.showBooks();
    }
  }

  removeBook = (title, author) => {
    this.allBooks = this.allBooks.filter(
      (book) => book.title !== title || book.authorName !== author,
    );
    this.saveCollection();
    this.showBooks();
  }

  showBooks = () => {
    const booksList = document.getElementById('book-list');
    booksList.innerHTML = '';
    this.allBooks.forEach((book) => {
      const list1 = document.createElement('span');
      const list = document.createElement('li');
      list.classList.add('list-item');
      list1.textContent = `"${book.title}" by ${book.authorName}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.addEventListener('click', () => this.removeBook(book.title, book.authorName));
      list.appendChild(list1);
      list.appendChild(removeButton);
      booksList.appendChild(list);
    });
  }

  saveCollection = () => {
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
  }

  clearInputFields = () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    titleInput.value = '';
    authorInput.value = '';
  }
}

export { BookCollection };
