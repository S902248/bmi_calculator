function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author.name}\nGenre: ${this.genre}\nPrice: ${this.price}`);
  };
  
  // Create instances of Book and Author objects
  const author1 = new Author('J.K. Rowling', 1965, 'British');
  const book1 = new Book('Harry Potter and the Philosopher\'s Stone', author1, 'Fantasy', 20.99);
  
  const author2 = new Author('Dan Brown', 1964, 'American');
  const book2 = new Book('The Da Vinci Code', author2, 'Mystery', 15.99);
  
  // Display the book details for each book in the bookstore
  book1.getBookInfo();
  book2.getBookInfo();
  