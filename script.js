const myLibrary = []

function Book(author, title, numberOfPages, readingStatus) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
    this.info = function() {
        answer = this.title + " by " + this.author + ", " + this.numberOfPages + " pages, "
        answer += this.readingStatus ? " read" : " not read yet";
        return answer;
    }

}

function addBookToLibrary(event) {
    event.preventDefault();
    const form = event.target;
    const newBook = new Book(form.book_author.value, form.book_title.value, form.book_numberOfPages.value, form.book_readingStatus.value)
    myLibrary.push(newBook);
    createBookCard(newBook);
    console.log(newBook.info());
}

function createBookCard(newBook){

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

// Basically I will create a preset container that I can read and copy and append. 
// //It's display will be none but when i add a gbook ill fix that