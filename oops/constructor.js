// defines a constructor which can be used for reusability
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.getDetails = () => {
    return `The title of book is ${this.title}. The author is ${this.author}`;
  };
}

// instead of creating getDetails() again and again, it can be called via constructor
const book1 = new Book("Test1", "Author1");
const book2 = new Book("Test2", "Author2");

console.log(book1.getDetails());
console.log(book2.title);
