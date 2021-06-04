// identify constants and add event listeners to buttons. 
const pupUp = document.getElementById('#popUp');

const addNewBook = document.querySelectorAll('[data-open-target]');
addNewBook.addEventListener('click', () => popUp.style.display = 'block');

const closeButton = document.querySelectorAll('[data-close-button]');


const submitButton = document.getElementById('#submitButton'); 
submitButton.addEventListener('click', addNewBook);

// constructor for making future "book" objects. 
function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.read = read;
    this.info = title + ' by ' + author + ", " + pages + ' pages, ' + read 
    }

//create a function to add new book objects
    function addNewBook() { 
    newBook = new Book(title, author, pages,read); 
    myLibrary.push(newBook);
    }

    let myLibrary = [];
    let newBook;
    //Write a function that loops through the array and displays each book on the page. 
    function displayEach() { 
        for (let i=0; i<myLibrary.length; i++){
            createBook(myLibrary[i]);
    }
    }
    
    //You can display them in some sort of table, or each on their own “card”. 
    //It might help for now to manually add a few books to your array so you can see the display.

  // samole books 
    const book1 = new Book('Becoming', 'Michelle Obama', 448, 'not read');
  
    const book2 = new Book('A Promise Land', 'Barack Obama', 768, 'not read');
  
    console.log(book2.title)
    console.log(book1.info);
    