const myLibrary = []
const bookCardContainer = document.querySelector(".bookCardContainer");

function Book(author, title, numberOfPages, readingStatus, listIndex) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
    this.listIndex = listIndex;
    this.htmlElement = null;
    this.readingStatusDisplay = null;

    this.info = function() {
        answer = this.title + " by " + this.author + ", " + this.numberOfPages + " pages, "
        answer += this.readingStatus ? " read" : " not read yet";
        return answer;
    }

}

function addBookToLibrary(event) {
    event.preventDefault();
    const form = event.target;
    const newBook = new Book(form.book_author.value, form.book_title.value, form.book_numberOfPages.value, form.book_readingStatus.checked, (myLibrary.length-1))
    myLibrary.push(newBook);
    createBookCard(newBook);
    console.log(newBook.info());
}

function createBookCard(newBook){
    //Create Container Div
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCardContainer.appendChild(bookCard);
    // Remove Book Button
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("removeBook");
    removeBookButton.innerHTML = "Remove Book";
    removeBookButton.onclick = function() {
        removeBook(newBook);
    }
    bookCard.appendChild(removeBookButton);
    // Title
    const titleElement = document.createElement("h1");
    titleElement.classList.add("title");
    titleElement.innerHTML = newBook.title;
    bookCard.appendChild(titleElement);
    //Author
    const authorName = document.createElement("div");
    authorName.classList.add("author");
    authorName.innerHTML = newBook.author;
    bookCard.appendChild(authorName);
    //readingStatus 
    const readingStatusElement = document.createElement("div");
    readingStatusElement.classList.add("readingStatus");
    readingStatusElement.style.backgroundColor = newBook.readingStatus ? "green" : "red";
    newBook.readingStatusDisplay = readingStatusElement;
    bookCard.appendChild(readingStatusElement);

    //number of pages

    const pageNumberElement = document.createElement("div");
    pageNumberElement.classList.add("numberOfPages");
    pageNumberElement.innerHTML = newBook.numberOfPages;
    bookCard.appendChild(pageNumberElement);


    newBook.htmlElement = bookCard;
}

function openAddBookPrompt(){
    const div = document.getElementById("formContainer");
    div.style.display = "block";
}

function closeAddBookPrompt(){
    const div = document.getElementById("formContainer");
    const form = document.getElementById("newBookForm");
    form.reset();
    div.style.display = "none";

}

function removeBook(book){
    console.log("Removing " + book.title);
    book.htmlElement.remove();
}

// Basically I will create a preset container that I can read and copy and append. 
// //It's display will be none but when i add a gbook ill fix that