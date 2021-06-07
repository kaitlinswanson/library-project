//listeners for new book button, close and submit. 
document.getElementById('button').addEventListener("click", function() {
	document.querySelector('#popUp').style.display = "flex";
});

document.querySelector('.close-button').addEventListener("click", function() {
	document.querySelector('#popUp').style.display = "none";
});


const submitNewBook= document.querySelector('#submitButton');
submitNewBook.addEventListener('click', addNewBook);

// constructor for making future "book" objects. 

class Book { 
    constructor(title, author, pages, read) {
    this.title = form.title.value; 
    this.author = form.author.value; 
    this.pages = form.pages.value;
    this.read = form.read.checked;
    this.info = title + ' by ' + author + ", " + pages + ' pages, ' + read 
    }
}

let myLibrary = [];
let newBook;
//create a function to add new book objects
    function addNewBook() { 
    event.preventDefault();
    document.querySelector('#popUp').style.display = "none";


    newBook = new Book(title, author, pages,read); 
    myLibrary.push(newBook);
    setData(); 
    displayEach();
    form.reset();
    }

    
    //Write a function that loops through the array and displays each book on the page. 
    function displayEach() { 
        const display = document.getElementById('Library-container');
        const libraryBooks = document.querySelectorAll('.book');
        libraryBooks.forEach(book => display.removeChild(book));

        for (let i=0; i<myLibrary.length; i++){
            createBook(myLibrary[i]);
  }
}
// create elements for books to be used in 'displayEach' 
function createBook(item) { 
    const library = document.querySelector('#Library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div'); 
    const pagesDiv = document.createElement('div');
    const readCheck = document.createElement('button');
    const removeButton = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = item.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    readCheck.classList.add('readCheck');
    bookDiv.appendChild(readCheck);
    if(item.read===false) { 
        readCheck.textContent = 'Not Read Yet';
        readCheck.style.backgroundColor = 'red';
    }else{ 
        readCheck.textContent = 'Read';
        readCheck.style.backgroundColor = 'green';
    }

    removeButton.textContent = 'Remove Book'; 
    removeButton.setAttribute('id', 'removeButton'); 
    bookDiv.appendChild(removeButton);

    library.appendChild(bookDiv);

    removeButton.addEventListener('click', () => { 
        myLibrary.splice(myLibrary.indexOf(item), 1);
        setData();
        displayEach();
    })
}

function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}   

    function restore() { 
        if(!localStorage.myLibrary) { 
            displayEach();
        }else{ 
            let objects = localStorage.getItem('myLibrary')
            objects = JSON.parse(objects);
            myLibrary = objects; 
            displayEach();
        }
    }
restore();
