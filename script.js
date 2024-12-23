const myLibrary = []

function Book(author, title, numberOfPages, readingStatus) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
    this.info = function() {
        answer = this.title + "by" + this.author + "," + this.numberOfPages + ","
        answer += this.readingStatus ? " read" : " not read yet";
        return answer;
    }

}

function addBookToLibrary() {
    const newBook = new Book()
    myLibrary.append(newBook);

}