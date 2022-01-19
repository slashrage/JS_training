class Book {
  constructor(
    name,
    author,
    publisher,
    category,
    pageNumber,
    currentPage,
    readStatus
  ) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.category = category;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }

  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }

  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }
}

export default Book;
