const books = [ 
    
    
    {
    
    "title": "Men Without Women",
    "author": "Haruki Murakami",
    "summary": "This is the summary of the book",
    "genre": "Anthology",
    "bookCover": "https://m.media-amazon.com/images/I/614X9n2mlcL._AC_UF1000,1000_QL80_.jpg",
    "rating": 4,
   
    "publishData":{
        "publisher": "Bungeishunju",
        "yearOfPublish": 2014,
    },
    
    "readingDate":{
        "start": "02-08-2024",
        "end": "02-28-2024",
    },

    
},

{
    
    "title": "Book2",
    "author": "Haruki Murakami",
    "summary": "This is the summary of the book",
    "genre": "Anthology",
    "bookCover": "https://m.media-amazon.com/images/I/614X9n2mlcL._AC_UF1000,1000_QL80_.jpg",
    "rating": 4,
   
    "publishData":{
        "publisher": "Bungeishunju",
        "yearOfPublish": 2014,
    },
    
    "readingDate":{
        "start": "02-08-2024",
        "end": "02-28-2024",
    },

    
},



];



window.addEventListener('load', ()=>{
    init();
})

const init = function(){

    const bookShelf = document.getElementById("bookshelf");


    books.map(function(book){
        const bookItem = buildBookItem(book)
        bookShelf.innerHTML = bookShelf.innerHTML + bookItem;
    })
}

const buildBookItem = function(book){
     return` <div class="book-item">
     <img src=${book.bookCover}>
     <div class="text-content">
     <h2>${book.title}</h2>
     <h3>${book.author}</h3>
     <p class="rating">${book.rating}</p>
     <div class=""reading-date">
     <p>${book.readingDate.start}</p>
     <p>${book.readingDate.end}</p>
     </div>
</div>`
    
     
}