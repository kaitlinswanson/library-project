//listeners for new book button, close and submit. 
document.getElementById('button').addEventListener("click", function() {
	document.querySelector('#popUp').style.display = "flex";
});

document.querySelector('.close-button').addEventListener("click", function() {
	document.querySelector('#popUp').style.display = "none";
});

//const newBookButton = document.querySelector('#addNewBookButton');
//addNewBookButton.addEventListener('click', () => popUpForm.style.display = 'flex');

//const popUpForm = document.getElementById('popUp');


//const submitNewBook= document.querySelector('#submitButton');
//addButton.addEventListener('click', addNewBook);



// constructor for making future "book" objects. 

class Book { 
    constructor(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.read = read;
    this.info = title + ' by ' + author + ", " + pages + ' pages, ' + read 
    }
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
    //const book1 = new Book('Becoming', 'Michelle Obama', 448, 'not read');
  
    //const book2 = new Book('A Promise Land', 'Barack Obama', 768, 'not read');
  
    //console.log(book2.title)
    //console.log(book1.info);
