const libraryFlex = document.getElementById("library-flex");

const btnAdd = document.getElementById("add-book");
const dialog = document.querySelector("dialog");
const btnClose = document.getElementById("cancel");
const btnConfirm = document.getElementById("confirm");

myLibrary = [];

//book constructor
function Book(title,author,pages,readed){
    this.title = title;
    this.author = author;
    this.pages = pages
    this.readed = readed
}

btnAdd.addEventListener("click", () =>{
    dialog.showModal();
})

btnClose.addEventListener("click",()=>{
    dialog.close();
})

btnConfirm.addEventListener("click",()=>{
    title_form = document.querySelector("#title-form");
    author_form = document.querySelector("#author-form");
    pages_form = document.querySelector("#pages-form");
    read_form = document.querySelector("#read-form");


    if(title_form.value.length <= 0){
        alert("ERROR: title have to get 5 characteres");
        
    }
    else if(author_form.value.length <=0) {
        alert("ERROR: Author have to get 10 characters ")
    }
    else if(pages_form.value <= 0 ){
        alert("ERROR: Pages can't be negative or zero");
    } 
    else{
        addBookToLibrary(title_form.value,author_form.value,pages_form.value,read_form.checked);
        addBookToPage(title_form.value,author_form.value,pages_form.value,read_form.checked);
        title_form.value = "";
        author_form.value = "";
        pages_form.value = 0000;
        dialog.close();
    }

  
 
});

// -------------------------- MAIN -----------------------------

addBookToLibrary("LITTLE PRINCESS the revenge","not me",69,false);
addBookToLibrary("TANTRA","maybe her idea",100,true);
addBookToLibrary("TANTRA 2","maybe her idea",50,true);
loadBookInPageFromArray();


// ---------------------------- Functions -------------------------

function addBookToLibrary(title,author,pages,readed){
    let newBook = new Book(title,author,pages,readed);
    myLibrary.push(newBook);
}


function addBookToPage(title,author,pages,readed){
        let cardBook = document.createElement("div");
        cardBook.classList.add("book");
        let containerBook = document.createElement("div");
        containerBook.classList.add("card-book")
        let titleDOM = document.createElement("h3");
        titleDOM.innerText = title;
        titleDOM.classList.add("title");
        let authorDOM = document.createElement("span");
        authorDOM.innerText = "by "+ author;
        authorDOM.classList.add("author");
        let pagesDOM = document.createElement("span");
        pagesDOM.innerText = pages + " pages";
        pagesDOM.classList.add("pages");
        let readedDOM = readed;
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
        buttomDelete.addEventListener("click",()=>{
            
            //deleteBookFromArray(myLibrary.length-1) ;
            deleteBookFromArray(buttomDelete.parentElement.firstChild.textContent);
            buttomDelete.parentElement.parentElement.remove();
            
        });
        cardBook.appendChild(titleDOM);
        cardBook.appendChild(authorDOM);
        cardBook.appendChild(pagesDOM);
        cardBook.appendChild(toggleContainer);
        cardBook.appendChild(buttomDelete);
        containerBook.appendChild(cardBook);
        libraryFlex.appendChild(containerBook);
}

function loadBookInPageFromArray(){
    console.log(myLibrary);
    for (book in myLibrary){
        console.log(myLibrary[book]);
        let cardBook = document.createElement("div");
        cardBook.classList.add("book");
        let containerBook = document.createElement("div");
        containerBook.classList.add("card-book");

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
        buttomDelete.addEventListener("click",()=>{
            console.log(buttomDelete.parentElement.firstChild.textContent);
            deleteBookFromArray(buttomDelete.parentElement.firstChild.textContent) ;
            buttomDelete.parentElement.parentElement.remove();
            
        });
        cardBook.appendChild(titleDOM);
        cardBook.appendChild(authorDOM);
        cardBook.appendChild(pagesDOM);
        cardBook.appendChild(toggleContainer);
        cardBook.appendChild(buttomDelete);
        containerBook.appendChild(cardBook);
        libraryFlex.appendChild(containerBook);
    }
}

function deleteBookFromArray(title){
    
    
  
    if(myLibrary.length === 1){
        myLibrary.shift();
    }else{
   
     
        myLibrary = myLibrary.filter(b=>{
            return b.title != title;
        })
    }
   console.log(myLibrary);
    
}

