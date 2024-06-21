document.getElementById('search-bar').addEventListener('input', searchBook);

function addBook() {
    const bookTitle = document.getElementById('new-book-title').value;
    if (bookTitle.trim() !== "") {
        const ul = document.getElementById('book');
        const li = document.createElement('li');
        li.textContent = bookTitle;
        li.addEventListener('click', toggleFavorite);
        ul.appendChild(li);
        document.getElementById('new-book-title').value = "";
    }
}
              
function searchBook() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const books = document.querySelectorAll('#book li');
    books.forEach(book => {
        if (book.textContent.toLowerCase().includes(searchTerm)) {
            book.style.backgroundColor = '#777';

        } else {
            book.style.backgroundColor = '';
        }
    });
}

function removeBook() {
    const ul = document.getElementById('book');
    if (ul.lastChild) {
        if (confirm('Are you sure you want to remove the last book?')) {
            ul.removeChild(ul.lastChild);
        }
    }
}

function toggleFavorite(event) {
    event.target.classList.toggle('favorite');
    const bookTitle = event.target.textContent;
    if (event.target.classList.contains('favorite')) {
        alert(`Add "${bookTitle}" to favorites?`);
    } else {
        alert(`Removed "${bookTitle}" from favorites.`);
    }
}

function clearSearchHighlights() {
    const books = document.querySelectorAll('#book li');
    books.forEach(book => {
        book.style.backgroundColor = '';
    });
}

        