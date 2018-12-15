class Book {
  constructor(title, author) {
      if (this.constructor === Book) {
          throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
      }
      else {
          this.title = title;
          this.author = author;
      }
  }
  
  display() {
      console.log('Implement the \'display\' method!')
  }
}

// Declare your class here.
  /**   
  *   Class Constructor
  *   
  *   @param title The book's title.
  *   @param author The book's author.
  *   @param price The book's price.
  **/
  // Write your constructor here
  class MyBook {
    constructor(title, author, price){
      this.title=title;
      this.author=author;
      this.price=price
    }
  }
  /**   
  *   Method Name: display
  *   
  *   Print the title, author, and price in the specified format.
  **/
  // Write your method here
  // MyBook.prototype=Object.create(Book)
  MyBook.prototype.constructor=MyBook
// End class

let storyBook= new MyBook('bedtime stories', 'myself',10)
console.log(storyBook)
console.log(storyBook instanceof Book)