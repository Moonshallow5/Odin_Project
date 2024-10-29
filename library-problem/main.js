
const myLibrary=[]
function Book(title,author,page){

    this.title=title
    this.author=author
    this.page=page
    
    this.toggleRead = function () {
        this.read = !this.read;
      }
}

function addBookToLibrary(book) {

    myLibrary.push(book);
    showLibrary()
  }


  function showLibrary(){
   

    const list = document.getElementById("library");
    list.innerHTML=""
    myLibrary.forEach((book,index) => {
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");  // Add custom class for styling
        if (book.read) {
            bookContainer.classList.add("read-book"); // Add class for read state
        }
        // Add custom class for styling

        // Display book information in the container
        bookContainer.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.page}</p>
            <button class="toggle-read-button">Read</button>
            <button class="delete-button">Delete</button>
            `



            const readButton = bookContainer.querySelector(".toggle-read-button");
            readButton.addEventListener("click", () => {
                book.toggleRead();
                showLibrary(); // Re-render the library to apply the color change
            });

            const deleteButton = bookContainer.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            deleteBookFromLibrary(index); // Call delete function
        });

    list.appendChild(bookContainer)
  


});

}
function deleteBookFromLibrary(index) {
    myLibrary.splice(index, 1); // Remove the book from the library array
    showLibrary(); // Re-render the library to reflect the change
}
document.getElementById("add_book_form_toggle").addEventListener("click", () => {
    document.getElementById("add_book_form").style.display = "block";
});

document.getElementById("close_form_button").addEventListener("click", () => {
    document.getElementById("add_book_form").style.display = "none";
});
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("pages").value;
    
    const newBook = new Book(title, author, page);
    addBookToLibrary(newBook);

    document.getElementById("add_book_form").style.display = "none"; // Hide form
    e.target.reset(); // Reset form fields
});


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 259);
const theHobbit2 = new Book("The Hobbit", "J.R.R. Tolkien", 259);
addBookToLibrary(theHobbit)
addBookToLibrary(theHobbit2)
showLibrary()