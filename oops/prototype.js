// defines a constructor which can be used for reusability

// problem with constructor is : all the properties will be passed whether used or not
// use prototype
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = () => {
  return `The title of book is ${this.title}. The author is ${this.author}`;
};

const book1 = new Book("Test1", "Author1");
const book2 = new Book("Test2", "Author2");

console.log(book1); // only shows author and title
console.log(book1.getDetails());
console.log(book2.title);
