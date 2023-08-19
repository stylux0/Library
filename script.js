const libraryFlex = document.getElementById("library-flex");
const btnDelete = document.getElementById("delete");


btnDelete.addEventListener("click", ()=>{
    console.log(btnDelete.parentElement.remove());
    
})

myLibrary = [];


//book constructor
function Book(title,author,pages,readed){
    this.title = title;
    this.author = author;
    this.pages = pages
    this.readed = readed
}


addBookToLibrary("little princess","not me",69,false);
addBookToLibrary("tantra","maybe her idea",100,true);

function addBookToLibrary(title,author,pages,readed){
    let newBook = new Book(title,author,pages,readed);
    myLibrary.push(newBook);
}


for (book in myLibrary){
    
    let cardBook = document.createElement("div");
    cardBook.classList.add("card-book");
    let titleDOM = document.createElement("h3");
    titleDOM.innerText = myLibrary[book].title;
    titleDOM.classList.add("title");
    let authorDOM = document.createElement("span");
    authorDOM.innerText = "by "+ myLibrary[book].author;
    authorDOM.classList.add("author");
    let pagesDOM = document.createElement("span");
    pagesDOM.innerText = myLibrary[book].pages + " pages";
    pagesDOM.classList.add("pages");
    let readedDOM = myLibrary[book].readed;
    let toggle = document.createElement("input");
    let label = document.createElement("label");
    let toggleContainer = document.createElement("div");
    toggleContainer.classList.add("read");
    label.innerHTML = "Do I read it? ";
    label.htmlFor = "readed";
    toggle.setAttribute("type","checkbox");
    toggle.checked = readedDOM;
    toggleContainer.appendChild(label);
    toggleContainer.appendChild(toggle);
    let buttomDelete = document.createElement("span");
    buttomDelete.setAttribute("class","mdi mdi-alpha-x-box")
    buttomDelete.addEventListener("click",()=>buttomDelete.parentElement.remove());
    cardBook.appendChild(titleDOM);
    cardBook.appendChild(authorDOM);
    cardBook.appendChild(pagesDOM);
    cardBook.appendChild(toggleContainer);
    cardBook.appendChild(buttomDelete);
    libraryFlex.appendChild(cardBook);
}



console.log(myLibrary);