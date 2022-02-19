function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = function () {
  return `The title of book is ${this.title}. The author is ${this.author}`;
};

// to use prototypes of book, it needs to be associated with magazine
// should be done before instantiation of Magazine
Magazine.prototype = Object.create(Book.prototype);

// instantiation
function Magazine(title, author, publishedYear) {
  //use the same properties of book: title and author
  //   Book.apply(this, [title, author]);
  // or
  Book.call(this, title, author);
  this.publishedYear = publishedYear;
}

const mag1 = new Magazine("title1", "author1", "2016");

// use magazine constructor instead of Book
Magazine.prototype.constructor = Magazine;
console.log(mag1);
console.log(mag1.getDetails());
